import express from "express";
import path from "path";

// upload file with below  mime types is supported
const SUPPORTED_FORMATS = [
    'text/xml',
    'text/csv',
    'application/xml',
    'application/csv'
];

export function uploadFiles(req: express.Request, res: express.Response, dest: string = './storage') {

    // check request for uploaded files
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(422).json({
            data: {
                message: 'No file selected to upload'
            }
        });
    }

    // change object to object array when user just select one file
    let files: any = req.files.productFiles;
    let fileList: any = [];

    if (typeof files == "object" && typeof files.length == "undefined") {
        files = [req.files.productFiles];
    }

    // move files to storage folder
    if (files.length) {
        files.map((file: any, index: number) => {
            if (!SUPPORTED_FORMATS.includes(file.mimetype)) {
                return res.status(422).json({
                    data: {
                        message: 'Extension error: select file(s) in xml or csv extension.'
                    }
                });
            }

            // add storage path to file object
            const filePath = dest + '/' + file.name;
            file.path = filePath;

            fileList[index] = file;
            file.mv(path.resolve(filePath), (err: any) => {
                if (err) {
                    return res.status(500).send(err);
                }
            })
        });
    }

    return fileList;
}
