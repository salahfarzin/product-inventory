import {Transformer} from "../common/transformer";
import {ProductDto} from "../dtos";
import {Product} from "../../entities";
import {injectable} from "inversify";

@injectable()
export class ProductTransfomer implements Transformer<any, any> {
    fromDto(d: ProductDto) {
        return d as any;
    }

    toDto(e: Product) {
        return e as any;
    }
}
