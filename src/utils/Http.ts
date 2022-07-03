import axios, { AxiosInstance } from 'axios';

let token = null;
const ls = window.localStorage;
if (ls.getItem('token')) {
  token = ls.getItem('token') ?? '0';
}

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_VAULTI_SERVER,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Token': token
    }
});

export default apiClient;