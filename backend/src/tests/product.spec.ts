import request from "supertest";
import App from "../app";
import {mockDbConnection} from "./mock/db-connection";

// connect to database
mockDbConnection();

describe('Github Authentication', () => {
    const app = new App;

    it("request authentication with github", async () => {
        const result = await request(app.run()).get("/api/v1/auth")

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('redirectTo');
    });
});
