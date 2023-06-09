import axios from "axios";

// Axios interceptors for API communication
axios.defaults.baseURL = 'https://the-woodshed-api.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();