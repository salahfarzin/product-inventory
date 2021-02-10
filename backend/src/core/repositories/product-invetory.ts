import {ProductInventory} from "../entities";
import {inject, injectable} from "inversify";
import {getRepository} from "typeorm";
import {ProductInventoryDto} from "./dtos";
import {TYPES} from "../../config/types";
import {Transformer} from "./common/transformer";
import {UserUpload} from "../entities/user-upload";

export interface ProductInventoryRepository {
    insert(product: ProductInventoryDto): any;
}

@injectable()
export class ProductInventoryRepositoryImpl implements ProductInventoryRepository {
    private productRepository = getRepository(ProductInventory);

    constructor(@inject(TYPES.ProductInventoryTransformer) private transformer: Transformer<UserUpload, ProductInventoryDto>) {
    }

    async insert(inventory: ProductInventoryDto) {
        return await this.productRepository.save(this.transformer.fromDto(inventory));
    }
}
