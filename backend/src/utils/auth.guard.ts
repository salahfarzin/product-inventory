import * as express from "express";
import {getConnection} from "typeorm";
import {User} from "../core/entities";

export async function guard(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.headers.authorization) {
        const userRepo: any = getConnection().manager.getRepository(User);
        let user: any;

        user = await userRepo.findOne({where: {token: req.headers.authorization}});

        if (!user) {
            return res.status(403).json({
                data: {
                    message: 'Unauthorized!'
                }
            });
        }

        next();
    }
}
