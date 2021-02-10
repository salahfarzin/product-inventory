import {ProductImageDto} from "./product-image";
import {UserDto} from "./user";

export interface ProductDto {
    id: number
    user?: UserDto,
    title: string
    body: string
    vendor: string
    type: string
    handle: string
    publishedScope: string
    tags: string
    images?: ProductImageDto[]
}
