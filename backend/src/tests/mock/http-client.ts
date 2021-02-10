import axios, { AxiosInstance } from 'axios';
import * as dotenv from "dotenv";

dotenv.config();

const mockHttpClient: AxiosInstance = axios.create({
    baseURL: process.env.APP_URI + ':' + process.env.PORT + process.env.ENDPOINT
});

mockHttpClient.defaults.headers.post['Content-Type'] = 'application/json';

export default mockHttpClient;
