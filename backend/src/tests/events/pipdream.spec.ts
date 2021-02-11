import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint: any = process.env.PD_ENDPOINT;

describe('Test Pipdream endpoint with a test event', () => {
    it("SEND this is the product-inventory app", async done => {
        const result = await axios
            .post(endpoint, {
                message: "This is the product-inventory app test send at" + Date.now()
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        expect(result.status).toBe(200);
        expect(result.data.success).toBe(true);

        done();
    });
});
