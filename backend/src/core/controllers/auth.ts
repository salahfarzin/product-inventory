import {controller, httpGet, interfaces, request, response} from "inversify-express-utils";
import * as express from "express";
import {TYPES} from "../../config/types";
import {UserRepository} from "../repositories/user";
import {inject} from "inversify";
import {HttpClient} from "../../utils/http-client";
import {UserDto} from "../repositories/dtos";

export interface AuthResponse {
    token: string
    user: UserDto | null | undefined
}

@controller('/api/v1/auth')
export default class Auth implements interfaces.Controller {
    constructor(@inject(TYPES.UserRepository) private readonly userRepository: UserRepository,
                @inject(TYPES.HttpClient) private readonly httpClient: HttpClient) {
    }

    @httpGet('/')
    public async request(@request() req: express.Request, @response() res: express.Response) {
        return res.status(200).json({
            redirectTo: process.env.GITHUB_URL + "/authorize?client_id=" + process.env.GITHUB_CLIENT_ID
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
        await this.httpClient.post(process.env.GITHUB_URL + '/access_token', body, opts)
            .then((_res: any) => {
                accessToken = _res.data.access_token;
            })
            .catch(err => {
                return res.status(422).json({message: err.message});
            });

        // request github user detail
        const tokenType = 'Bearer';
        const response = await this.httpClient.get('https://api.github.com/user', {
            headers: {
                Authorization: tokenType + ' ' + accessToken,
            },
        });

        // store user info to database
        let userDto: UserDto;
        const data: any = response.data;
        userDto = {
            token: accessToken,
            name: data.login,
            email: data.email,
            payload: JSON.stringify(data)
        }

        // store user or update information (currently by token create new user)
        if (response.status == 200) {
            this.userRepository.createOrUpdate(userDto)
        }

        // authentication data
        const authResponse: AuthResponse = {
            token: accessToken,
            user: userDto
        };

        return res.json(authResponse);
    }
}
