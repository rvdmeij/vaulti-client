import axios, { AxiosInstance } from 'axios';

let token = '0';
if (window.localStorage.getItem('token')) {
  //  token = window.localStorage.getItem('token') ?? '0'
  token = "0";
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