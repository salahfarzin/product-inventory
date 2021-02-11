import "reflect-metadata";
import {TYPES} from "./types";
import {Container} from "inversify";
import {UserRepository, UserRepositoryImpl} from "../core/repositories/user";
import {ProductRepository, ProductRepositoryImpl} from "../core/repositories/product";
import {UserUploadRepository, UserUploadRepositoryImpl} from "../core/repositories/user-upload";
import {ProductInventoryRepository, ProductInventoryRepositoryImpl} from "../core/repositories/product-invetory";
import {Transformer} from "../core/repositories/common/transformer";
import '../core/controllers/product';
import '../core/controllers/auth';
import {ProductDto, ProductInventoryDto, UserDto} from "../core/repositories/dtos";
import {Product, ProductInventory, User} from "../core/entities";
import {ProductTransfomer} from "../core/repositories/transfomers/product";
import {UserUpload} from "../core/entities/user-upload";
import {UserUploadDto} from "../core/repositories/dtos/user-upload";
import {UserUploadTransformer} from "../core/repositories/transfomers/user-upload";
import {UserTransfomer} from "../core/repositories/transfomers/user";
import {ProductInventoryTransformer} from "../core/repositories/transfomers/product-inventory";
import {HttpClient} from "../utils/http-client";
import {EventEmitter, EventEmitterImpl} from "../core/repositories/common/event";
import {interfaces} from "inversify-express-utils";

const container = new Container();

// HttpClient

// HttpClient
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient);

// Event
container.bind<EventEmitter>(TYPES.EventEmitter).to(EventEmitterImpl);

// User
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);
container.bind<Transformer<User, UserDto>>(TYPES.UserTransformer).to(UserTransfomer);

// User Upload Repository
container.bind<UserUploadRepository>(TYPES.UserUploadRepository).to(UserUploadRepositoryImpl);
container.bind<Transformer<UserUpload, UserUploadDto>>(TYPES.UserUploadTransformer).to(UserUploadTransformer);

// Product
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl);
container.bind<Transformer<Product, ProductDto>>(TYPES.ProductTransfomer).to(ProductTransfomer);

// Product Inventory
container.bind<ProductInventoryRepository>(TYPES.ProductInventoryRepository).to(ProductInventoryRepositoryImpl);
container.bind<Transformer<ProductInventory, ProductInventoryDto>>(TYPES.ProductInventoryTransformer).to(ProductInventoryTransformer);


export {container}
