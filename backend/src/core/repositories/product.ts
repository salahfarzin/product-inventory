import {Product} from "../entities";
import {inject, injectable} from "inversify";
import {getRepository} from "typeorm";
import {ProductDto} from "./dtos";
import {TYPES} from "../../config/types";
import {Transformer} from "./common/transformer";


export interface ProductRepository {
    getAll(): Promise<Product[]>;

    insert(product: ProductDto): any;
}

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
    private productRepository = getRepository(Product);

    constructor(@inject(TYPES.ProductTransfomer) private transfomer: Transformer<Product, ProductDto>) {
    }

    getAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async insert(product: ProductDto) {
        return await this.productRepository.save(this.transfomer.fromDto(product))
            .catch((error) => {
                if (error.code === 'ER_DUP_ENTRY') {
                    delete product.images

                    // if product is duplicate the update that
                    this.productRepository.update({id: product.id}, this.transfomer.fromDto(product));

                    //todo: send and event
                }
            });
    }
}
