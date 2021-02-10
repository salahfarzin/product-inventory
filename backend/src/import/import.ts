import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';
import * as parser from 'fast-xml-parser';

export default interface Importer {
    load(fileName: string, callBack: any): any;
}

export class ImportCsv implements Importer {
    load(fileName: string, callBack: any) {
        let result: any = [];
        fs.createReadStream(path.resolve(fileName))
            .pipe(csv({separator: ';'}))
            .on('data', (row) => result.push(row))
            .on('end', () => callBack(result));

        return result;
    }
}

export class ImportXml implements Importer {
    load(fileName: string, callBack: any) {
        const xml = fs.readFileSync(path.resolve(fileName), 'utf8')

        if (parser.validate(xml) === true) { //optional (it'll return an object in case it's not valid)
            try {
                let jsonObj = parser.parse(xml);

                callBack(jsonObj.products.product);
                return jsonObj.products.product;
            } catch (error) {
                console.log(error.message)
            }
        }

        return null;
    }
}
