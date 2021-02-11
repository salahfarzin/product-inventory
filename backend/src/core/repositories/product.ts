import {Product} from "../entities";
import {inject, injectable} from "inversify";
import {getRepository} from "typeorm";
import {ProductDto} from "./dtos";
import {TYPES} from "../../config/types";
import {Transformer} from "./common/transformer";
import {EventConfig, EventEmitterImpl} from "./common/event";


export interface ProductRepository {
    getAll(): Promise<Product[]>;

    insert(product: ProductDto): any;
}

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
    private productRepository = getRepository(Product);

    constructor(@inject(TYPES.ProductTransfomer) private transfomer: Transformer<Product, ProductDto>,
                @inject(TYPES.EventEmitter) private event: EventEmitterImpl) {
    }

    getAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async insert(product: ProductDto) {
        const endpoint: any = process.env.PD_ENDPOINT;

        return await this.productRepository.save(this.transfomer.fromDto(product))
            .catch((error) => {
                if (error.code === 'ER_DUP_ENTRY') {
                    delete product.images

                    // if product is duplicate the update that
                    this.productRepository.update({id: product.id}, this.transfomer.fromDto(product));

                    // emit an event
                    const eventConfig: EventConfig = {
                        url: endpoint,
                        data: {
                            message: "product id [" + product.id + "] was updated",
                            product: product
                        }
                    }
                    this.event.subscribe(eventConfig);
                }
            });
    }
}
