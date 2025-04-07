import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const createAxiosInstance = () => {
  return axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const AxiosInstance = createAxiosInstance();

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error: ", error, "URL: ", error.config?.url);
    return Promise.reject(error);
  }
);

const HttpClient = {
  Post: (url = "", data = {}, config = undefined) => {
    return AxiosInstance.post(url, data, config);
  },
  Put: (url = "", data = {}, config = undefined) => {
    return AxiosInstance.put(url, data, config);
  },
  Get: (url = "", params?: any) => {
    return AxiosInstance.get(url, { params });
  },
  Delete: (url = "", params?: any) => {
    return AxiosInstance.delete(url, { params });
  },
  Patch: (url = "", data = {}, config = undefined) => {
    return AxiosInstance.patch(url, data, config);
  },
  setBaseURL: (baseURL: string) => {
    AxiosInstance.defaults.baseURL = baseURL;
  },
  setHeader: (key: string, value: string) => {
    AxiosInstance.defaults.headers[key] = value;
  },
};

export default HttpClient;
