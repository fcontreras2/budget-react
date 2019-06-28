import axios from "axios";
import env from "enviroments";

const instance = axios.create({
  baseURL: env.api,
  timeout: 1000,
  responseType: 'json',
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  withCredentials: false
});

export const http = {
  get: async url => await instance.get(url),
  post: async (url, data) => await instance.post(url, data)
};
