export const TYPES = {
    // Database
    DbClient: Symbol.for("Transformer"),

    // Transformer
    Transformer: Symbol.for("Transformer"),

    // User
    UserRepository: Symbol.for("UserRepository"),
    UserTransformer: Symbol.for("UserTransformer"),

    // User Upload
    UserUploadRepository: Symbol.for("UserUploadRepository"),
    UserUploadTransformer: Symbol.for("UserUploadTransformer"),

    // Product
    ProductRepository: Symbol.for("ProductRepository"),
    ProductTransfomer: Symbol.for("ProductTransfomer"),

    // Product Inventory
    ProductInventoryRepository: Symbol.for("ProductInventoryRepository"),
    ProductInventoryTransformer: Symbol.for("ProductInventoryTransformer"),

}
