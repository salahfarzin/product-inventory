/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar container_1 = __webpack_require__(/*! ./config/container */ \"./src/config/container.ts\");\nvar inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ \"inversify-express-utils\");\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nvar express_fileupload_1 = __importDefault(__webpack_require__(/*! express-fileupload */ \"express-fileupload\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nvar App = /** @class */ (function () {\n    function App() {\n    }\n    App.prototype.run = function () {\n        if (!process.env.PORT) {\n            process.exit(1);\n        }\n        var PORT = parseInt(process.env.PORT, 10);\n        var core = new inversify_express_utils_1.InversifyExpressServer(container_1.container);\n        core.setConfig(function (app) {\n            app.use(helmet_1.default());\n            app.use(cors_1.default());\n            app.use(body_parser_1.default.json());\n            app.use(body_parser_1.default.urlencoded({ extended: true })); //  Allow form-data parsing\n            app.use(express_fileupload_1.default());\n        });\n        var ser = core.build();\n        /**\n         * Server Activation\n         */\n        var app = ser.listen(PORT, function () {\n            if (true) {\n                console.log(\"Listening on port \" + PORT);\n            }\n        });\n        if (true) {\n            module.hot.accept();\n            module.hot.dispose(function () { return app.close(); });\n        }\n        return app;\n    };\n    return App;\n}());\nexports.default = App;\n\n\n//# sourceURL=webpack://express-ts-api/./src/app.ts?");

/***/ }),

/***/ "./src/config/container.ts":
/*!*********************************!*\
  !*** ./src/config/container.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.container = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar types_1 = __webpack_require__(/*! ./types */ \"./src/config/types.ts\");\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar user_1 = __webpack_require__(/*! ../core/repositories/user */ \"./src/core/repositories/user.ts\");\nvar product_1 = __webpack_require__(/*! ../core/repositories/product */ \"./src/core/repositories/product.ts\");\nvar user_upload_1 = __webpack_require__(/*! ../core/repositories/user-upload */ \"./src/core/repositories/user-upload.ts\");\nvar product_invetory_1 = __webpack_require__(/*! ../core/repositories/product-invetory */ \"./src/core/repositories/product-invetory.ts\");\n__webpack_require__(/*! ../core/controllers/product */ \"./src/core/controllers/product.ts\");\n__webpack_require__(/*! ../core/controllers/auth */ \"./src/core/controllers/auth.ts\");\nvar product_2 = __webpack_require__(/*! ../core/repositories/transfomers/product */ \"./src/core/repositories/transfomers/product.ts\");\nvar user_upload_2 = __webpack_require__(/*! ../core/repositories/transfomers/user-upload */ \"./src/core/repositories/transfomers/user-upload.ts\");\nvar user_2 = __webpack_require__(/*! ../core/repositories/transfomers/user */ \"./src/core/repositories/transfomers/user.ts\");\nvar product_inventory_1 = __webpack_require__(/*! ../core/repositories/transfomers/product-inventory */ \"./src/core/repositories/transfomers/product-inventory.ts\");\nvar http_client_1 = __webpack_require__(/*! ../utils/http-client */ \"./src/utils/http-client.ts\");\nvar event_1 = __webpack_require__(/*! ../core/repositories/common/event */ \"./src/core/repositories/common/event.ts\");\nvar container = new inversify_1.Container();\nexports.container = container;\n// HttpClient\ncontainer.bind(types_1.TYPES.HttpClient).to(http_client_1.HttpClient);\n// Event\ncontainer.bind(types_1.TYPES.EventEmitter).to(event_1.EventEmitterImpl);\n// User\ncontainer.bind(types_1.TYPES.UserRepository).to(user_1.UserRepositoryImpl);\ncontainer.bind(types_1.TYPES.UserTransformer).to(user_2.UserTransfomer);\n// User Upload Repository\ncontainer.bind(types_1.TYPES.UserUploadRepository).to(user_upload_1.UserUploadRepositoryImpl);\ncontainer.bind(types_1.TYPES.UserUploadTransformer).to(user_upload_2.UserUploadTransformer);\n// Product\ncontainer.bind(types_1.TYPES.ProductRepository).to(product_1.ProductRepositoryImpl);\ncontainer.bind(types_1.TYPES.ProductTransfomer).to(product_2.ProductTransfomer);\n// Product Inventory\ncontainer.bind(types_1.TYPES.ProductInventoryRepository).to(product_invetory_1.ProductInventoryRepositoryImpl);\ncontainer.bind(types_1.TYPES.ProductInventoryTransformer).to(product_inventory_1.ProductInventoryTransformer);\n\n\n//# sourceURL=webpack://express-ts-api/./src/config/container.ts?");

/***/ }),

/***/ "./src/config/db.ts":
/*!**************************!*\
  !*** ./src/config/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dbConfig = void 0;\nvar entities_1 = __webpack_require__(/*! ../core/entities */ \"./src/core/entities/index.ts\");\nvar user_upload_1 = __webpack_require__(/*! ../core/entities/user-upload */ \"./src/core/entities/user-upload.ts\");\nexports.dbConfig = {\n    \"name\": \"default\",\n    \"type\": \"mysql\",\n    \"port\": process.env.DB_PORT,\n    \"host\": process.env.DB_HOST,\n    \"username\": process.env.DB_USERNAME,\n    \"password\": process.env.DB_PASSWORD,\n    \"database\": process.env.DB_DATABASE,\n    \"synchronize\": true,\n    \"entities\": [\n        entities_1.Product,\n        entities_1.ProductImage,\n        entities_1.ProductInventory,\n        entities_1.User,\n        user_upload_1.UserUpload\n    ]\n};\n\n\n//# sourceURL=webpack://express-ts-api/./src/config/db.ts?");

/***/ }),

/***/ "./src/config/types.ts":
/*!*****************************!*\
  !*** ./src/config/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TYPES = void 0;\nexports.TYPES = {\n    // HttpClient\n    HttpClient: Symbol.for(\"HttpClient\"),\n    // Transformers (Data Mapper)\n    Transformer: Symbol.for(\"Transformer\"),\n    // Events\n    EventEmitter: Symbol.for(\"EventEmitter\"),\n    // User\n    UserRepository: Symbol.for(\"UserRepository\"),\n    UserTransformer: Symbol.for(\"UserTransformer\"),\n    // User Upload\n    UserUploadRepository: Symbol.for(\"UserUploadRepository\"),\n    UserUploadTransformer: Symbol.for(\"UserUploadTransformer\"),\n    // Product\n    ProductRepository: Symbol.for(\"ProductRepository\"),\n    ProductTransfomer: Symbol.for(\"ProductTransfomer\"),\n    // Product Inventory\n    ProductInventoryRepository: Symbol.for(\"ProductInventoryRepository\"),\n    ProductInventoryTransformer: Symbol.for(\"ProductInventoryTransformer\"),\n};\n\n\n//# sourceURL=webpack://express-ts-api/./src/config/types.ts?");

/***/ }),

/***/ "./src/core/controllers/auth.ts":
/*!**************************************!*\
  !*** ./src/core/controllers/auth.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ \"inversify-express-utils\");\nvar types_1 = __webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\");\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar Auth = /** @class */ (function () {\n    function Auth(userRepository, httpClient) {\n        this.userRepository = userRepository;\n        this.httpClient = httpClient;\n    }\n    Auth.prototype.request = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, res.status(200).json({\n                        redirectTo: process.env.GITHUB_URL + \"/authorize?client_id=\" + process.env.GITHUB_CLIENT_ID\n                    })];\n            });\n        });\n    };\n    Auth.prototype.github = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var body, opts, accessToken, tokenType, response, userDto, data, authResponse;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        body = {\n                            client_id: process.env.GITHUB_CLIENT_ID,\n                            client_secret: process.env.GITHUB_CLIENT_SECRET,\n                            code: req.query.code\n                        };\n                        opts = { headers: { accept: 'application/json' } };\n                        accessToken = '';\n                        return [4 /*yield*/, this.httpClient.post(process.env.GITHUB_URL + '/access_token', body, opts)\n                                .then(function (_res) {\n                                accessToken = _res.data.access_token;\n                            })\n                                .catch(function (err) {\n                                return res.status(422).json({ message: err.message });\n                            })];\n                    case 1:\n                        _a.sent();\n                        tokenType = 'Bearer';\n                        return [4 /*yield*/, this.httpClient.get('https://api.github.com/user', {\n                                headers: {\n                                    Authorization: tokenType + ' ' + accessToken,\n                                },\n                            })];\n                    case 2:\n                        response = _a.sent();\n                        data = response.data;\n                        userDto = {\n                            token: accessToken,\n                            name: data.login,\n                            email: data.email,\n                            payload: JSON.stringify(data)\n                        };\n                        // store user or update information (currently by token create new user)\n                        if (response.status == 200) {\n                            this.userRepository.createOrUpdate(userDto);\n                        }\n                        authResponse = {\n                            token: accessToken,\n                            user: userDto\n                        };\n                        return [2 /*return*/, res.json(authResponse)];\n                }\n            });\n        });\n    };\n    __decorate([\n        inversify_express_utils_1.httpGet('/'),\n        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())\n    ], Auth.prototype, \"request\", null);\n    __decorate([\n        inversify_express_utils_1.httpGet('/github'),\n        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())\n    ], Auth.prototype, \"github\", null);\n    Auth = __decorate([\n        inversify_express_utils_1.controller('/api/v1/auth'),\n        __param(0, inversify_1.inject(types_1.TYPES.UserRepository)),\n        __param(1, inversify_1.inject(types_1.TYPES.HttpClient))\n    ], Auth);\n    return Auth;\n}());\nexports.default = Auth;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/controllers/auth.ts?");

/***/ }),

/***/ "./src/core/controllers/product.ts":
/*!*****************************************!*\
  !*** ./src/core/controllers/product.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ \"inversify-express-utils\");\nvar types_1 = __webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\");\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar upload_file_1 = __webpack_require__(/*! ../../utils/upload-file */ \"./src/utils/upload-file.ts\");\nvar import_1 = __webpack_require__(/*! ../../import/import */ \"./src/import/import.ts\");\nvar auth_guard_1 = __webpack_require__(/*! ../../utils/auth.guard */ \"./src/utils/auth.guard.ts\");\nvar Product = /** @class */ (function () {\n    function Product(productRepository, userRepository, userUploadRepository, productInventoryRepository) {\n        this.productRepository = productRepository;\n        this.userRepository = userRepository;\n        this.userUploadRepository = userUploadRepository;\n        this.productInventoryRepository = productInventoryRepository;\n    }\n    Product.prototype.list = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var user, files;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userRepository.getByToken(req.headers.authorization ? req.headers.authorization : '')];\n                    case 1:\n                        user = _a.sent();\n                        return [4 /*yield*/, this.userUploadRepository.getByUser(user, 10)];\n                    case 2:\n                        files = _a.sent();\n                        return [2 /*return*/, res.status(200).json({\n                                data: { files: files }\n                            })];\n                }\n            });\n        });\n    };\n    Product.prototype.upload = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var files, user, fileListResponse;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        files = upload_file_1.uploadFiles(req, res);\n                        return [4 /*yield*/, this.userRepository.getByToken(req.headers.authorization ? req.headers.authorization : '')];\n                    case 1:\n                        user = _a.sent();\n                        fileListResponse = [];\n                        files.length && files.map(function (file, key) {\n                            switch (file.mimetype) {\n                                case 'text/xml':\n                                case 'application/xml':\n                                    new import_1.ImportXml().load(file.path, function (result) {\n                                        result.map(function (item) {\n                                            var img = item.image;\n                                            var image = {\n                                                id: img.id,\n                                                productId: img['product-id'],\n                                                createdAt: img['created-at'],\n                                                updatedAt: img['updated-at'],\n                                                width: img.width,\n                                                height: img.height,\n                                                src: img.src\n                                            };\n                                            if (item.alt) {\n                                                image.alt = item.alt;\n                                            }\n                                            if (item.position) {\n                                                image.position = item.position;\n                                            }\n                                            var product = {\n                                                id: item.id,\n                                                user: user,\n                                                title: item.title,\n                                                body: item['body-html'],\n                                                vendor: item.vendor,\n                                                type: item['product-typ'],\n                                                handle: item.handle,\n                                                publishedScope: item['published-scope'],\n                                                tags: item.tags,\n                                                images: [image]\n                                            };\n                                            _this.productRepository.insert(product);\n                                        });\n                                    });\n                                    break;\n                                case 'application/csv':\n                                case 'text/csv':\n                                    var csv = new import_1.ImportCsv().load(file.path, function (result) {\n                                        result.map(function (item) {\n                                            var inventory = {\n                                                user: user,\n                                                handle: item.handle,\n                                                location: item.location,\n                                                amount: item.amount\n                                            };\n                                            // insert to product inventory table\n                                            _this.productInventoryRepository.insert(inventory);\n                                        });\n                                    });\n                                    break;\n                            }\n                            // store user uploads\n                            var userUpload = {\n                                user: user,\n                                name: file.name,\n                                size: file.size,\n                                mimetype: file.mimetype,\n                                path: file.path\n                            };\n                            fileListResponse[key] = userUpload;\n                            _this.userUploadRepository.insert(userUpload);\n                        });\n                        return [2 /*return*/, this.list(req, res)];\n                }\n            });\n        });\n    };\n    __decorate([\n        inversify_express_utils_1.httpGet('/history'),\n        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())\n    ], Product.prototype, \"list\", null);\n    __decorate([\n        inversify_express_utils_1.httpPut('/upload'),\n        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())\n    ], Product.prototype, \"upload\", null);\n    Product = __decorate([\n        inversify_express_utils_1.controller('/api/v1/product', auth_guard_1.guard),\n        __param(0, inversify_1.inject(types_1.TYPES.ProductRepository)),\n        __param(1, inversify_1.inject(types_1.TYPES.UserRepository)),\n        __param(2, inversify_1.inject(types_1.TYPES.UserUploadRepository)),\n        __param(3, inversify_1.inject(types_1.TYPES.ProductInventoryRepository))\n    ], Product);\n    return Product;\n}());\nexports.default = Product;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/controllers/product.ts?");

/***/ }),

/***/ "./src/core/entities/index.ts":
/*!************************************!*\
  !*** ./src/core/entities/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./user */ \"./src/core/entities/user.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./product-image */ \"./src/core/entities/product-image.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./product */ \"./src/core/entities/product.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./product-inventory */ \"./src/core/entities/product-inventory.ts\"), exports);\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/entities/index.ts?");

/***/ }),

/***/ "./src/core/entities/product-image.ts":
/*!********************************************!*\
  !*** ./src/core/entities/product-image.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductImage = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar product_1 = __webpack_require__(/*! ./product */ \"./src/core/entities/product.ts\");\nvar ProductImage = /** @class */ (function () {\n    function ProductImage() {\n    }\n    __decorate([\n        typeorm_1.PrimaryGeneratedColumn({ type: \"bigint\" })\n    ], ProductImage.prototype, \"id\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"integer\", nullable: true })\n    ], ProductImage.prototype, \"position\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"integer\", nullable: true })\n    ], ProductImage.prototype, \"width\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"integer\", nullable: true })\n    ], ProductImage.prototype, \"height\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"varchar\", nullable: true })\n    ], ProductImage.prototype, \"src\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"varchar\", nullable: true })\n    ], ProductImage.prototype, \"alt\", void 0);\n    __decorate([\n        typeorm_1.Column(\"timestamp\")\n    ], ProductImage.prototype, \"createdAt\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"timestamp\", nullable: true })\n    ], ProductImage.prototype, \"updatedAt\", void 0);\n    __decorate([\n        typeorm_1.ManyToOne(function () { return product_1.Product; }, function (product) { return product.images; }),\n        typeorm_1.JoinTable()\n    ], ProductImage.prototype, \"product\", void 0);\n    ProductImage = __decorate([\n        typeorm_1.Entity()\n    ], ProductImage);\n    return ProductImage;\n}());\nexports.ProductImage = ProductImage;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/entities/product-image.ts?");

/***/ }),

/***/ "./src/core/entities/product-inventory.ts":
/*!************************************************!*\
  !*** ./src/core/entities/product-inventory.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductInventory = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar product_1 = __webpack_require__(/*! ./product */ \"./src/core/entities/product.ts\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/core/entities/user.ts\");\nvar ProductInventory = /** @class */ (function () {\n    function ProductInventory() {\n    }\n    __decorate([\n        typeorm_1.PrimaryGeneratedColumn({ type: \"bigint\" })\n    ], ProductInventory.prototype, \"id\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], ProductInventory.prototype, \"handle\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], ProductInventory.prototype, \"location\", void 0);\n    __decorate([\n        typeorm_1.Column(\"decimal\")\n    ], ProductInventory.prototype, \"amount\", void 0);\n    __decorate([\n        typeorm_1.ManyToOne(function () { return product_1.Product; }, function (product) { return product.handle; })\n    ], ProductInventory.prototype, \"product\", void 0);\n    __decorate([\n        typeorm_1.ManyToOne(function () { return user_1.User; }, function (user) { return user.productInventories; })\n    ], ProductInventory.prototype, \"user\", void 0);\n    ProductInventory = __decorate([\n        typeorm_1.Entity()\n    ], ProductInventory);\n    return ProductInventory;\n}());\nexports.ProductInventory = ProductInventory;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/entities/product-inventory.ts?");

/***/ }),

/***/ "./src/core/entities/product.ts":
/*!**************************************!*\
  !*** ./src/core/entities/product.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Product = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar product_image_1 = __webpack_require__(/*! ./product-image */ \"./src/core/entities/product-image.ts\");\nvar product_inventory_1 = __webpack_require__(/*! ./product-inventory */ \"./src/core/entities/product-inventory.ts\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/core/entities/user.ts\");\nvar Product = /** @class */ (function () {\n    function Product() {\n    }\n    __decorate([\n        typeorm_1.PrimaryGeneratedColumn({ type: \"bigint\" })\n    ], Product.prototype, \"id\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], Product.prototype, \"title\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], Product.prototype, \"handle\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"text\" })\n    ], Product.prototype, \"body\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], Product.prototype, \"vendor\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], Product.prototype, \"type\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], Product.prototype, \"publishedScope\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], Product.prototype, \"tags\", void 0);\n    __decorate([\n        typeorm_1.Column(\"timestamp\"),\n        typeorm_1.CreateDateColumn()\n    ], Product.prototype, \"createdAt\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"timestamp\", nullable: true })\n    ], Product.prototype, \"updatedAt\", void 0);\n    __decorate([\n        typeorm_1.ManyToOne(function () { return user_1.User; }, function (user) { return user.products; }),\n        typeorm_1.JoinTable()\n    ], Product.prototype, \"user\", void 0);\n    __decorate([\n        typeorm_1.OneToMany(function () { return product_inventory_1.ProductInventory; }, function (inventory) { return inventory.product; })\n    ], Product.prototype, \"inventories\", void 0);\n    __decorate([\n        typeorm_1.OneToMany(function () { return product_image_1.ProductImage; }, function (productImage) { return productImage.product; }, {\n            eager: true,\n            cascade: true\n        }),\n        typeorm_1.JoinTable()\n    ], Product.prototype, \"images\", void 0);\n    Product = __decorate([\n        typeorm_1.Entity()\n    ], Product);\n    return Product;\n}());\nexports.Product = Product;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/entities/product.ts?");

/***/ }),

/***/ "./src/core/entities/user-upload.ts":
/*!******************************************!*\
  !*** ./src/core/entities/user-upload.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserUpload = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/core/entities/user.ts\");\nvar UserUpload = /** @class */ (function () {\n    function UserUpload() {\n    }\n    __decorate([\n        typeorm_1.PrimaryGeneratedColumn({ type: \"bigint\" })\n    ], UserUpload.prototype, \"id\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], UserUpload.prototype, \"name\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"varchar\", nullable: true })\n    ], UserUpload.prototype, \"size\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"varchar\", nullable: true })\n    ], UserUpload.prototype, \"mimetype\", void 0);\n    __decorate([\n        typeorm_1.Column(\"timestamp\"),\n        typeorm_1.CreateDateColumn()\n    ], UserUpload.prototype, \"createdAt\", void 0);\n    __decorate([\n        typeorm_1.ManyToOne(function () { return user_1.User; }, function (user) { return user.uploads; })\n    ], UserUpload.prototype, \"user\", void 0);\n    UserUpload = __decorate([\n        typeorm_1.Entity()\n    ], UserUpload);\n    return UserUpload;\n}());\nexports.UserUpload = UserUpload;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/entities/user-upload.ts?");

/***/ }),

/***/ "./src/core/entities/user.ts":
/*!***********************************!*\
  !*** ./src/core/entities/user.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar product_1 = __webpack_require__(/*! ./product */ \"./src/core/entities/product.ts\");\nvar user_upload_1 = __webpack_require__(/*! ./user-upload */ \"./src/core/entities/user-upload.ts\");\nvar product_inventory_1 = __webpack_require__(/*! ./product-inventory */ \"./src/core/entities/product-inventory.ts\");\nvar User = /** @class */ (function () {\n    /*@Unique([\"email\"])*/\n    function User() {\n    }\n    __decorate([\n        typeorm_1.PrimaryGeneratedColumn({ type: \"bigint\" })\n    ], User.prototype, \"id\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], User.prototype, \"name\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"varchar\", nullable: true })\n    ], User.prototype, \"email\", void 0);\n    __decorate([\n        typeorm_1.Column(\"varchar\")\n    ], User.prototype, \"token\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"text\", nullable: true })\n    ], User.prototype, \"payload\", void 0);\n    __decorate([\n        typeorm_1.Column(\"timestamp\"),\n        typeorm_1.CreateDateColumn()\n    ], User.prototype, \"createdAt\", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \"timestamp\", nullable: true })\n    ], User.prototype, \"updatedAt\", void 0);\n    __decorate([\n        typeorm_1.OneToMany(function () { return product_1.Product; }, function (product) { return product.user; })\n    ], User.prototype, \"products\", void 0);\n    __decorate([\n        typeorm_1.OneToMany(function () { return product_inventory_1.ProductInventory; }, function (product) { return product.user; })\n    ], User.prototype, \"productInventories\", void 0);\n    __decorate([\n        typeorm_1.OneToMany(function () { return user_upload_1.UserUpload; }, function (userUpload) { return userUpload.user; })\n    ], User.prototype, \"uploads\", void 0);\n    User = __decorate([\n        typeorm_1.Entity()\n        /*@Unique([\"email\"])*/\n    ], User);\n    return User;\n}());\nexports.User = User;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/entities/user.ts?");

/***/ }),

/***/ "./src/core/repositories/common/event.ts":
/*!***********************************************!*\
  !*** ./src/core/repositories/common/event.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EventEmitterImpl = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar types_1 = __webpack_require__(/*! ../../../config/types */ \"./src/config/types.ts\");\nvar EventEmitterImpl = /** @class */ (function () {\n    function EventEmitterImpl(httpClient) {\n        this.httpClient = httpClient;\n    }\n    EventEmitterImpl.prototype.subscribe = function (event) {\n        return this.httpClient.post(event.url, event.data, {\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    };\n    EventEmitterImpl = __decorate([\n        inversify_1.injectable(),\n        __param(0, inversify_1.inject(types_1.TYPES.HttpClient))\n    ], EventEmitterImpl);\n    return EventEmitterImpl;\n}());\nexports.EventEmitterImpl = EventEmitterImpl;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/common/event.ts?");

/***/ }),

/***/ "./src/core/repositories/product-invetory.ts":
/*!***************************************************!*\
  !*** ./src/core/repositories/product-invetory.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductInventoryRepositoryImpl = void 0;\nvar entities_1 = __webpack_require__(/*! ../entities */ \"./src/core/entities/index.ts\");\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar types_1 = __webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\");\nvar ProductInventoryRepositoryImpl = /** @class */ (function () {\n    function ProductInventoryRepositoryImpl(transformer) {\n        this.transformer = transformer;\n        this.productRepository = typeorm_1.getRepository(entities_1.ProductInventory);\n    }\n    ProductInventoryRepositoryImpl.prototype.insert = function (inventory) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.productRepository.save(this.transformer.fromDto(inventory))];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    ProductInventoryRepositoryImpl = __decorate([\n        inversify_1.injectable(),\n        __param(0, inversify_1.inject(types_1.TYPES.ProductInventoryTransformer))\n    ], ProductInventoryRepositoryImpl);\n    return ProductInventoryRepositoryImpl;\n}());\nexports.ProductInventoryRepositoryImpl = ProductInventoryRepositoryImpl;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/product-invetory.ts?");

/***/ }),

/***/ "./src/core/repositories/product.ts":
/*!******************************************!*\
  !*** ./src/core/repositories/product.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductRepositoryImpl = void 0;\nvar entities_1 = __webpack_require__(/*! ../entities */ \"./src/core/entities/index.ts\");\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar types_1 = __webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\");\nvar ProductRepositoryImpl = /** @class */ (function () {\n    function ProductRepositoryImpl(transfomer, event) {\n        this.transfomer = transfomer;\n        this.event = event;\n        this.productRepository = typeorm_1.getRepository(entities_1.Product);\n    }\n    ProductRepositoryImpl.prototype.getAll = function () {\n        return this.productRepository.find();\n    };\n    ProductRepositoryImpl.prototype.insert = function (product) {\n        return __awaiter(this, void 0, void 0, function () {\n            var endpoint;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        endpoint = process.env.PD_ENDPOINT;\n                        return [4 /*yield*/, this.productRepository.save(this.transfomer.fromDto(product))\n                                .catch(function (error) {\n                                if (error.code === 'ER_DUP_ENTRY') {\n                                    delete product.images;\n                                    // if product is duplicate the update that\n                                    _this.productRepository.update({ id: product.id }, _this.transfomer.fromDto(product));\n                                    // emit an event\n                                    var eventConfig = {\n                                        url: endpoint,\n                                        data: {\n                                            message: \"product id [\" + product.id + \"] was updated\",\n                                            product: product\n                                        }\n                                    };\n                                    _this.event.subscribe(eventConfig);\n                                }\n                            })];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    ProductRepositoryImpl = __decorate([\n        inversify_1.injectable(),\n        __param(0, inversify_1.inject(types_1.TYPES.ProductTransfomer)),\n        __param(1, inversify_1.inject(types_1.TYPES.EventEmitter))\n    ], ProductRepositoryImpl);\n    return ProductRepositoryImpl;\n}());\nexports.ProductRepositoryImpl = ProductRepositoryImpl;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/product.ts?");

/***/ }),

/***/ "./src/core/repositories/transfomers/product-inventory.ts":
/*!****************************************************************!*\
  !*** ./src/core/repositories/transfomers/product-inventory.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductInventoryTransformer = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar ProductInventoryTransformer = /** @class */ (function () {\n    function ProductInventoryTransformer() {\n    }\n    ProductInventoryTransformer.prototype.fromDto = function (d) {\n        return d;\n    };\n    ProductInventoryTransformer.prototype.toDto = function (e) {\n        return e;\n    };\n    ProductInventoryTransformer = __decorate([\n        inversify_1.injectable()\n    ], ProductInventoryTransformer);\n    return ProductInventoryTransformer;\n}());\nexports.ProductInventoryTransformer = ProductInventoryTransformer;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/transfomers/product-inventory.ts?");

/***/ }),

/***/ "./src/core/repositories/transfomers/product.ts":
/*!******************************************************!*\
  !*** ./src/core/repositories/transfomers/product.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductTransfomer = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar ProductTransfomer = /** @class */ (function () {\n    function ProductTransfomer() {\n    }\n    ProductTransfomer.prototype.fromDto = function (d) {\n        return d;\n    };\n    ProductTransfomer.prototype.toDto = function (e) {\n        return e;\n    };\n    ProductTransfomer = __decorate([\n        inversify_1.injectable()\n    ], ProductTransfomer);\n    return ProductTransfomer;\n}());\nexports.ProductTransfomer = ProductTransfomer;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/transfomers/product.ts?");

/***/ }),

/***/ "./src/core/repositories/transfomers/user-upload.ts":
/*!**********************************************************!*\
  !*** ./src/core/repositories/transfomers/user-upload.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserUploadTransformer = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar UserUploadTransformer = /** @class */ (function () {\n    function UserUploadTransformer() {\n    }\n    UserUploadTransformer.prototype.fromDto = function (d) {\n        return d;\n    };\n    UserUploadTransformer.prototype.toDto = function (e) {\n        return e;\n    };\n    UserUploadTransformer = __decorate([\n        inversify_1.injectable()\n    ], UserUploadTransformer);\n    return UserUploadTransformer;\n}());\nexports.UserUploadTransformer = UserUploadTransformer;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/transfomers/user-upload.ts?");

/***/ }),

/***/ "./src/core/repositories/transfomers/user.ts":
/*!***************************************************!*\
  !*** ./src/core/repositories/transfomers/user.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserTransfomer = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar UserTransfomer = /** @class */ (function () {\n    function UserTransfomer() {\n    }\n    UserTransfomer.prototype.fromDto = function (d) {\n        return d;\n    };\n    UserTransfomer.prototype.toDto = function (e) {\n        return e;\n    };\n    UserTransfomer = __decorate([\n        inversify_1.injectable()\n    ], UserTransfomer);\n    return UserTransfomer;\n}());\nexports.UserTransfomer = UserTransfomer;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/transfomers/user.ts?");

/***/ }),

/***/ "./src/core/repositories/user-upload.ts":
/*!**********************************************!*\
  !*** ./src/core/repositories/user-upload.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserUploadRepositoryImpl = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar user_upload_1 = __webpack_require__(/*! ../entities/user-upload */ \"./src/core/entities/user-upload.ts\");\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar types_1 = __webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\");\nvar UserUploadRepositoryImpl = /** @class */ (function () {\n    function UserUploadRepositoryImpl(transformer) {\n        this.transformer = transformer;\n        this.userUploadRepository = typeorm_1.getRepository(user_upload_1.UserUpload);\n    }\n    UserUploadRepositoryImpl.prototype.insert = function (userUpload) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userUploadRepository.save(this.transformer.fromDto(userUpload))];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    UserUploadRepositoryImpl.prototype.getByUser = function (user, take) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userUploadRepository.find({ where: { user: user }, take: 10 })];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    UserUploadRepositoryImpl = __decorate([\n        inversify_1.injectable(),\n        __param(0, inversify_1.inject(types_1.TYPES.UserUploadTransformer))\n    ], UserUploadRepositoryImpl);\n    return UserUploadRepositoryImpl;\n}());\nexports.UserUploadRepositoryImpl = UserUploadRepositoryImpl;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/user-upload.ts?");

/***/ }),

/***/ "./src/core/repositories/user.ts":
/*!***************************************!*\
  !*** ./src/core/repositories/user.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserRepositoryImpl = void 0;\nvar entities_1 = __webpack_require__(/*! ../entities */ \"./src/core/entities/index.ts\");\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar types_1 = __webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\");\nvar UserRepositoryImpl = /** @class */ (function () {\n    function UserRepositoryImpl(transformer) {\n        this.transformer = transformer;\n        this.userRepository = typeorm_1.getRepository(entities_1.User);\n    }\n    UserRepositoryImpl.prototype.getByToken = function (token) {\n        return __awaiter(this, void 0, void 0, function () {\n            var user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { token: token } })];\n                    case 1:\n                        user = _a.sent();\n                        return [2 /*return*/, this.transformer.toDto(user)];\n                }\n            });\n        });\n    };\n    UserRepositoryImpl.prototype.getById = function (id) {\n        return __awaiter(this, void 0, void 0, function () {\n            var user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userRepository.findOneOrFail(id)];\n                    case 1:\n                        user = _a.sent();\n                        return [2 /*return*/, this.transformer.toDto(user)];\n                }\n            });\n        });\n    };\n    UserRepositoryImpl.prototype.insert = function (user) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userRepository.insert(this.transformer.fromDto(user))];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    UserRepositoryImpl.prototype.createOrUpdate = function (user) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.userRepository.insert(this.transformer.fromDto(user))];\n                    case 1: \n                    // const userExists = await this.userRepository.findOne({where: {name: user.name}});\n                    //\n                    // if (userExists) {\n                    //     return await this.userRepository.update({username: user.username}, this.transformer.fromDto(user));\n                    // }\n                    return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    UserRepositoryImpl = __decorate([\n        inversify_1.injectable(),\n        __param(0, inversify_1.inject(types_1.TYPES.UserTransformer))\n    ], UserRepositoryImpl);\n    return UserRepositoryImpl;\n}());\nexports.UserRepositoryImpl = UserRepositoryImpl;\n\n\n//# sourceURL=webpack://express-ts-api/./src/core/repositories/user.ts?");

/***/ }),

/***/ "./src/import/import.ts":
/*!******************************!*\
  !*** ./src/import/import.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ImportXml = exports.ImportCsv = void 0;\nvar fs = __importStar(__webpack_require__(/*! fs */ \"fs\"));\nvar path = __importStar(__webpack_require__(/*! path */ \"path\"));\nvar csv_parser_1 = __importDefault(__webpack_require__(/*! csv-parser */ \"csv-parser\"));\nvar parser = __importStar(__webpack_require__(/*! fast-xml-parser */ \"fast-xml-parser\"));\nvar ImportCsv = /** @class */ (function () {\n    function ImportCsv() {\n    }\n    ImportCsv.prototype.load = function (fileName, callBack) {\n        var result = [];\n        fs.createReadStream(path.resolve(fileName))\n            .pipe(csv_parser_1.default({ separator: ';' }))\n            .on('data', function (row) { return result.push(row); })\n            .on('end', function () { return callBack(result); });\n        return result;\n    };\n    return ImportCsv;\n}());\nexports.ImportCsv = ImportCsv;\nvar ImportXml = /** @class */ (function () {\n    function ImportXml() {\n    }\n    ImportXml.prototype.load = function (fileName, callBack) {\n        var xml = fs.readFileSync(path.resolve(fileName), 'utf8');\n        if (parser.validate(xml) === true) { //optional (it'll return an object in case it's not valid)\n            try {\n                var jsonObj = parser.parse(xml);\n                callBack(jsonObj.products.product);\n                return jsonObj.products.product;\n            }\n            catch (error) {\n                console.log(error.message);\n            }\n        }\n        return null;\n    };\n    return ImportXml;\n}());\nexports.ImportXml = ImportXml;\n\n\n//# sourceURL=webpack://express-ts-api/./src/import/import.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nvar db_1 = __webpack_require__(/*! ./config/db */ \"./src/config/db.ts\");\n/**\n * Database connection\n */\ntypeorm_1.createConnection(db_1.dbConfig).then(function () { return new app_1.default().run(); });\n\n\n//# sourceURL=webpack://express-ts-api/./src/main.ts?");

/***/ }),

/***/ "./src/utils/auth.guard.ts":
/*!*********************************!*\
  !*** ./src/utils/auth.guard.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.guard = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar entities_1 = __webpack_require__(/*! ../core/entities */ \"./src/core/entities/index.ts\");\nfunction guard(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var userRepo, user;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    if (!req.headers.authorization) return [3 /*break*/, 2];\n                    userRepo = typeorm_1.getConnection().manager.getRepository(entities_1.User);\n                    user = void 0;\n                    return [4 /*yield*/, userRepo.findOne({ where: { token: req.headers.authorization } })];\n                case 1:\n                    user = _a.sent();\n                    if (!user) {\n                        return [2 /*return*/, res.status(403).json({\n                                data: {\n                                    message: 'Unauthorized!'\n                                }\n                            })];\n                    }\n                    next();\n                    _a.label = 2;\n                case 2: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.guard = guard;\n\n\n//# sourceURL=webpack://express-ts-api/./src/utils/auth.guard.ts?");

/***/ }),

/***/ "./src/utils/http-client.ts":
/*!**********************************!*\
  !*** ./src/utils/http-client.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HttpClient = void 0;\nvar inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\naxios_1.default.interceptors.request.use(function (config) {\n    /**\n     * add come config globally\n     */\n    return config;\n});\nvar HttpClient = /** @class */ (function () {\n    function HttpClient() {\n        this.client = axios_1.default;\n    }\n    HttpClient.prototype.get = function (url, config) {\n        return this.client.get(url, config);\n    };\n    HttpClient.prototype.post = function (url, data, config) {\n        return this.client.post(url, data, config);\n    };\n    HttpClient = __decorate([\n        inversify_1.injectable()\n    ], HttpClient);\n    return HttpClient;\n}());\nexports.HttpClient = HttpClient;\n\n\n//# sourceURL=webpack://express-ts-api/./src/utils/http-client.ts?");

/***/ }),

/***/ "./src/utils/upload-file.ts":
/*!**********************************!*\
  !*** ./src/utils/upload-file.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.uploadFiles = void 0;\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\n// upload file with below  mime types is supported\nvar SUPPORTED_FORMATS = [\n    'text/xml',\n    'text/csv',\n    'application/xml',\n    'application/csv'\n];\nfunction uploadFiles(req, res, dest) {\n    if (dest === void 0) { dest = './storage'; }\n    // check request for uploaded files\n    if (!req.files || Object.keys(req.files).length === 0) {\n        return res.status(422).json({\n            data: {\n                message: 'No file selected to upload'\n            }\n        });\n    }\n    // change object to object array when user just select one file\n    var files = req.files.productFiles;\n    var fileList = [];\n    if (typeof files == \"object\" && typeof files.length == \"undefined\") {\n        files = [req.files.productFiles];\n    }\n    // move files to storage folder\n    if (files.length) {\n        files.map(function (file, index) {\n            if (!SUPPORTED_FORMATS.includes(file.mimetype)) {\n                return res.status(422).json({\n                    data: {\n                        message: 'Extension error: select file(s) in xml or csv extension.'\n                    }\n                });\n            }\n            // add storage path to file object\n            var filePath = dest + '/' + file.name;\n            file.path = filePath;\n            fileList[index] = file;\n            file.mv(path_1.default.resolve(filePath), function (err) {\n                if (err) {\n                    return res.status(500).send(err);\n                }\n            });\n        });\n    }\n    return fileList;\n}\nexports.uploadFiles = uploadFiles;\n\n\n//# sourceURL=webpack://express-ts-api/./src/utils/upload-file.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://express-ts-api/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://express-ts-api/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?100 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.substr(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://express-ts-api/./node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "csv-parser":
/*!*****************************!*\
  !*** external "csv-parser" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("csv-parser");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-fileupload");;

/***/ }),

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fast-xml-parser");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("inversify");;

/***/ }),

/***/ "inversify-express-utils":
/*!******************************************!*\
  !*** external "inversify-express-utils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("inversify-express-utils");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("reflect-metadata");;

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7ff55633f86426806e55")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;