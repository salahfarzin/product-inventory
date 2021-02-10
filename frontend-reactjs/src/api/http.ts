import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { showAlert } from '../util';
import {getToken, TOKEN_KEY} from "../features/auth/authSlice";
const http: AxiosInstance = axios.create({
    baseURL: 'http://localhost:7000/api/v1'
});

http.defaults.headers.post['Content-Type'] = 'application/json';
http.interceptors.request.use(async (config) => {
    config.headers.Authorization =  getToken();
    return config;
})

http.interceptors.response.use(
    async (response: AxiosResponse) => {
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }
    },
    (error: AxiosError) => {
        const { response, request }: {
            response?: AxiosResponse;
            request?: XMLHttpRequest;
        } = error;
        if (response) {
            if (response.status >= 400 && response.status < 500) {
                if (response.status == 403) {
                    localStorage.removeItem(TOKEN_KEY);
                    setTimeout(() => window.location.href = '/', 100);
                }
                showAlert(response.data?.data?.message, 'error');
                return null;
            }
        } else if (request) {
            showAlert('Request failed. Please try again.', 'error');
            return null;
        }
        return Promise.reject(error);
    }
);

export default http;
