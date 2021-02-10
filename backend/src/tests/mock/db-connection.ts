import {createConnection} from "typeorm";
import {dbConfig} from "../../config/db";

let connection: any;
export const mockDbConnection = () => {
    beforeAll(async () => {
        connection = await createConnection(dbConfig);
    });

    afterAll(async () => {
        await connection.close();
    });

    it('connect to database ' + dbConfig.database + ' successfully', async () => {
        expect(true).toBe(true);
    });
}
