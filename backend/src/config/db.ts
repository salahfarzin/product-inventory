import {Product, ProductImage, ProductInventory, User} from "../core/entities";
import {UserUpload} from "../core/entities/user-upload";

export const dbConfig: any = {
    "name": "default",
    "type": "mysql",
    "port": 3306,
    "host": process.env.DB_HOST,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "synchronize": true,
    "entities": [
        Product,
        ProductImage,
        ProductInventory,
        User,
        UserUpload
    ]
};
