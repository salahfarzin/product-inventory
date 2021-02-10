import {UserDto} from "./user";

export interface UserUploadDto {
    user?: UserDto
    name: string
    size: number
    mimetype: string
    path: string
}
