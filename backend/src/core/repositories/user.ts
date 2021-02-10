import {User} from "../entities";
import {inject, injectable} from "inversify";
import {getRepository} from "typeorm";
import {UserDto} from "./dtos";
import {UserUploadDto} from "./dtos/user-upload";
import {TYPES} from "../../config/types";
import {Transformer} from "./common/transformer";
import {UserUpload} from "../entities/user-upload";

export interface UserRepository {
    getById(id: number): Promise<UserDto>;

    getByToken(token: string): Promise<UserDto>;

    insert(user: UserDto): any;

    createOrUpdate(user: UserDto): any;
}

@injectable()
export class UserRepositoryImpl implements UserRepository {
    private userRepository = getRepository(User);

    constructor(@inject(TYPES.UserTransformer) private transformer: Transformer<User, UserDto>) {
    }

    async getByToken(token: string): Promise<UserDto> {
        const user = await this.userRepository.findOne({where: {token: token}});

        return this.transformer.toDto(<User>user);
    }

    async getById(id: number): Promise<UserDto> {
        const user = await this.userRepository.findOneOrFail(id);

        return this.transformer.toDto(user);
    }

    async insert(user: UserDto) {
        await this.userRepository.insert(this.transformer.fromDto(user));
    }

    async createOrUpdate(user: UserDto) {
        // const userExists = await this.userRepository.findOne({where: {name: user.name}});
        //
        // if (userExists) {
        //     return await this.userRepository.update({username: user.username}, this.transformer.fromDto(user));
        // }

        return await this.userRepository.insert(this.transformer.fromDto(user));
    }
}
