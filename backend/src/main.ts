import {createConnection} from "typeorm";
import App from "./app";
import {dbConfig} from "./config/db";

/**
 * Database connection
 */
createConnection(dbConfig).then(() => new App().run());
