import {Transformer} from "../common/transformer";
import {injectable} from "inversify";
import {ProductInventoryDto} from "../dtos";
import {ProductInventory} from "../../entities";

@injectable()
export class ProductInventoryTransformer implements Transformer<any, any> {
    fromDto(d: ProductInventoryDto) {
        return d as any;
    }

    toDto(e: ProductInventory) {
        return e as any;
    }
}
