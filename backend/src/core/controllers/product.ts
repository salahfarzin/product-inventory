import {controller, httpGet, httpPut, interfaces, request, response} from "inversify-express-utils";
import {ProductRepository} from "../repositories/product";
import {TYPES} from "../../config/types";
import * as express from "express";
import {inject} from "inversify";
import {uploadFiles} from "../../utils/upload-file";
import {ImportCsv, ImportXml} from "../../import/import";
import {ProductDto, ProductImageDto, ProductInventoryDto} from "../repositories/dtos";
import {UserUploadDto} from "../repositories/dtos/user-upload";
import {guard} from "../../utils/auth.guard";
import {UserUploadRepository} from "../repositories/user-upload";
import {ProductInventoryRepository} from "../repositories/product-invetory";
import {UserRepository} from "../repositories/user";

@controller('/api/v1/product', guard)
export default class Product implements interfaces.Controller {
    constructor(@inject(TYPES.ProductRepository) private productRepository: ProductRepository,
                @inject(TYPES.UserRepository) private userRepository: UserRepository,
                @inject(TYPES.UserUploadRepository) private userUploadRepository: UserUploadRepository,
                @inject(TYPES.ProductInventoryRepository) private productInventoryRepository: ProductInventoryRepository) {
    }

    @httpGet('/history')
    public async list(@request() req: express.Request, @response() res: express.Response) {
        const user = await this.userRepository.getByToken(req.headers.authorization ? req.headers.authorization : '');
        const files = await this.userUploadRepository.getByUser(user, 10);

        return res.status(200).json({
            data: {files}
        });
    }

    @httpPut('/upload')
    public async upload(@request() req: express.Request, @response() res: express.Response): Promise<any> {
        const files = uploadFiles(req, res);

        // get user by token
        const user = await this.userRepository.getByToken(req.headers.authorization ? req.headers.authorization : '');

        let fileListResponse: any = [];
        files.length && files.map((file: any, key: number) => {
            switch (file.mimetype) {
                case 'text/xml':
                case 'application/xml':
                    new ImportXml().load(file.path, (result: any) => {
                        result.map((item: any) => {
                            const img: any = item.image;

                            let image: ProductImageDto = {
                                id: img.id,
                                productId: img['product-id'],
                                createdAt: img['created-at'],
                                updatedAt: img['updated-at'],
                                width: img.width,
                                height: img.height,
                                src: img.src
                            };
                            if (item.alt) {
                                image.alt = item.alt;
                            }
                            if (item.position) {
                                image.position = item.position;
                            }

                            const product: ProductDto = {
                                id: item.id,
                                user: user,
                                title: item.title,
                                body: item['body-html'],
                                vendor: item.vendor,
                                type: item['product-typ'],
                                handle: item.handle,
                                publishedScope: item['published-scope'],
                                tags: item.tags,
                                images: [image]
                            };
                            this.productRepository.insert(product);
                        })
                    });
                    break
                case 'application/csv':
                case 'text/csv':
                    const csv = new ImportCsv().load(file.path, (result: any) => {
                        result.map((item: any) => {
                            const inventory: ProductInventoryDto = {
                                user: user,
                                handle: item.handle,
                                location: item.location,
                                amount: item.amount
                            };

                            // insert to product inventory table
                            this.productInventoryRepository.insert(inventory);
                        });
                    });

                    break;
            }

            // store user uploads
            const userUpload: UserUploadDto = {
                user: user,
                name: file.name,
                size: file.size,
                mimetype: file.mimetype,
                path: file.path
            };

            fileListResponse[key] = userUpload;

            this.userUploadRepository.insert(userUpload);
        });

        return this.list(req, res);
    }
}
