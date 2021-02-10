import {inject, injectable} from "inversify";
import {UserUploadDto} from "./dtos/user-upload";
import {UserUpload} from "../entities/user-upload";
import {getRepository} from "typeorm";
import {TYPES} from "../../config/types";
import {Transformer} from "./common/transformer";
import {UserDto} from "./dtos";

export interface UserUploadRepository {
    insert(userUpload: UserUploadDto): any;

    getByUser(user: UserDto, take: number): any;
}

@injectable()
export class UserUploadRepositoryImpl implements UserUploadRepository {
    private userUploadRepository = getRepository(UserUpload);

    constructor(@inject(TYPES.UserUploadTransformer) private transformer: Transformer<UserUpload, UserUploadDto>) {
    }

    async insert(userUpload: UserUploadDto) {
        return await this.userUploadRepository.save(this.transformer.fromDto(userUpload));
    }

    async getByUser(user: UserDto, take: number) {
        return await this.userUploadRepository.find({where: {user: user}, take: 10});
    }
}
