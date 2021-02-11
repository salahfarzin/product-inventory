export const TYPES = {
    // Database
    HttpClient: Symbol.for("HttpClient"),

    // Transformer
    Transformer: Symbol.for("Transformer"),

    // Event
    EventEmitter: Symbol.for("EventEmitter"),

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
