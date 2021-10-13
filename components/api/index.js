import axios from "axios"
import { getToken } from "./token"

export const BASE_URL = "http://172.20.23.61:8080"

export const api = () => {

    const token =  getToken();

    
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}