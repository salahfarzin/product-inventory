import {UserDto} from "./user";

export interface ProductInventoryDto {
    user?: UserDto
    handle: string
    location: string
    amount: number
}
