import {Transformer} from "../common/transformer";
import {injectable} from "inversify";
import {UserUploadDto} from "../dtos/user-upload";
import {UserUpload} from "../../entities/user-upload";

@injectable()
export class UserUploadTransformer implements Transformer<any, any> {
    fromDto(d: UserUploadDto) {
        return d as any;
    }

    toDto(e: UserUpload) {
        return e as any;
    }
}
