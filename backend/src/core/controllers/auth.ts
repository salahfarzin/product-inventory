import {controller, httpGet, interfaces, request, response} from "inversify-express-utils";
import * as express from "express";
import axios from "axios";
import {TYPES} from "../../config/types";
import {UserRepository} from "../repositories/user";
import {inject} from "inversify";
import {User} from "../../../../frontend/src/interfaces/user";

export interface AuthResponse {
    token: string;
    user: User;
}

@controller('/api/v1/auth')
export default class Auth implements interfaces.Controller {
    constructor(@inject(TYPES.UserRepository) private readonly userRepository: UserRepository) {
    }

    @httpGet('/')
    public async request(@request() req: express.Request, @response() res: express.Response) {
        return res.status(200).json({
            redirectTo: "https://github.com/login/oauth/authorize?client_id=" + process.env.GITHUB_CLIENT_ID
        });
    }

    @httpGet('/github')
    public async github(@request() req: express.Request, @response() res: express.Response) {

        // make request body to get github access token
        const body = {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: req.query.code
        };
        const opts = {headers: {accept: 'application/json'}};

        // request github access token
        let accessToken: string = '';
        await axios.post(`https://github.com/login/oauth/access_token`, body, opts)
            .then(_res => {
                accessToken = _res.data.access_token;
            })
            .catch(err => {
                return res.status(422).json({message: err.message});
            });

        // request github user detail
        const tokenType = 'Bearer';
        const response = await axios({
            url: `https://api.github.com/user`,
            headers: {
                Authorization: tokenType + ' ' + accessToken,
            },
        });

        // store user info to database
        if (response.status == 200) {
            const data = response.data;
            this.userRepository.createOrUpdate({
                token: accessToken,
                name: data.login,
                email: data.email,
                payload: JSON.stringify(data)
            })
        }

        // authentication data
        const data: AuthResponse = {
            'token': accessToken,
            'user': response.data
        };

        return res.json(data);
    }

    @httpGet('/check')
    public async check(@request() req: express.Request, @response() res: express.Response) {
        const token: string = req.headers.authorization ? req.headers.authorization : '';

        const user = this.userRepository.getByToken(token);
        return res.json({
            data: {
                user: user
            }
        });
    }
}
