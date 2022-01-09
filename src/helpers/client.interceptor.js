import axios from "axios";
import config from "../config/index";

const client = axios.create(config.api);
export const requestDetails = (method, url, payload=null, headers=1) => {
    let requestData = {
        method: method,
        url: url
    }
    if(payload)
        requestData.data = payload;
    if(headers === 1)
        requestData.headers = {
            'Authorization':'Bearer '+ localStorage.getItem('token') 
        };
    return client(requestData);
}

// Request interceptor
client.interceptors.request.use(
    request => {
      return request;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptor
  client.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );