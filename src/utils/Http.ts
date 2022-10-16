import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_VAULTI_SERVER,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

export default apiClient;
