import {createConnection} from "typeorm";
import request from "supertest";
import App from "../app";
import {dbConfig} from "../config/db";

describe('Database connection test', () => {
    let connection: any;

    beforeAll(async () => {
        connection = await createConnection(dbConfig);
    });

    afterAll(async () => {
        await connection.close();
    });

    it('connect to database successfully ', async () => {
        expect(true).toBe(true);
    });

    const app = new App;

    //
    // it("request authentication with github", async () => {
    //     const result = await request(app.run()).get("/api/v1/auth")
    //     expect(result.status).toBe(301);
    // });
    //
    // it("Check product without authorization", async () => {
    //     const result = await request(app.run()).get("/api/v1/product/upload")
    //     expect(result.status).toBe(200);
    // });
});
