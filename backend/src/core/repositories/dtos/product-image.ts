export interface ProductImageDto {
    id: number
    productId: number
    createdAt: Date | null
    updatedAt: Date | null
    position?: number | null
    width: number
    height: number
    src: string
    alt?: string | null
}
