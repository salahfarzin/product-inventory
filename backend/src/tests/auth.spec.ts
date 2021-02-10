import request from "supertest"
import App from "../app";
import {mockDbConnection} from "./mock/db-connection";

// database connect
mockDbConnection();

// mock app
const app = new App;
const endpoint = process.env.ENDPOINT;

describe('Test Github Authentication endpoints', () => {
    it("GET " + endpoint + "/auth",async done => {
        const result = await request(app.run())
            .get(endpoint + "/auth")
            .set('Accept', 'application/json')
            .expect(200);

        expect(result.body).toHaveProperty('redirectTo');
        done();
    });
});
