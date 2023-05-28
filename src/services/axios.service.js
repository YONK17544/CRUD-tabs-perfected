import axios from 'axios';

const BACKEND_URL = "http://dummyjson.com/";

export const getData = (url) =>{
    const response = axios.get(BACKEND_URL + url)
    return response;
}