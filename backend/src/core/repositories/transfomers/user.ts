import {Transformer} from "../common/transformer";
import {UserDto} from "../dtos";
import {injectable} from "inversify";
import {User} from "../../entities";

@injectable()
export class UserTransfomer implements Transformer<any, any> {
    fromDto(d: UserDto) {
        return d as any;
    }

    toDto(e: User) {
        return e as any;
    }
}
