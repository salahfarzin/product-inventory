import {injectable} from "inversify";
import axios, {AxiosResponse} from "axios";


axios.interceptors.request.use((config) => {
    /**
     * add come config globally
     */
    return config
})

@injectable()
export class HttpClient {
    private client = axios

    async get<T>(url: any, config: {}): Promise<AxiosResponse<T>> {
        return await this.client.get<T>(url, config)
    }

    async post<T, R>(url: any, data: any, config: {}): Promise<AxiosResponse<T>> {
        return await this.client.post<T>(url, data, config)
    }
}
