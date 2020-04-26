import axios from "axios";
import qs from "qs";
import http from "http";
import https from "https";
import { toast } from "react-toastify";
import { axiosEvn } from "../config";
import { apiConst } from "../constanst";
import { getToken } from "./storage";

const basicHeader = {
  "Content-Type": "application/json"
};

const customHeader = {
  "Content-Type": "multipart/form-data"
};

const config = {
  // baseUrl: axiosEvn.PROD_API_URL,
  baseURL: "https://ssdn-simulator.herokuapp.com/", //axiosEvn.DEV_API_URL,
  responseType: "json",
  timeout: 10000,
  maxContentLength: 5000,
  maxBodyLength: 5000,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  headers: basicHeader,
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "repeat" })
  }
};

const instance = axios.create(config);

instance.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "Bearer " + getToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return mappingResponse(response);
  },
  error => {
    return Promise.reject(error);
  }
);

const get = (url, params = {}, cancelToken = null) =>
  instance
    .get(url, { params, cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      loggerError(error);
      return {
        error: true,
        message: "",
        data: null,
        isCancel: axios.isCancel(error)
      };
      // return Promise.reject(error);
    });

const post = (url, params = {}, cancelToken = null) =>
  instance
    .post(url, params, { cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      loggerError(error);
      return {
        error: true,
        message: "",
        data: null,
        isCancel: axios.isCancel(error)
      };
      // return Promise.reject(error);
    });

const put = (url, params = {}, cancelToken = null) =>
  instance
    .put(url, params, { cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      loggerError(error);
      return {
        error: true,
        message: "",
        data: null,
        isCancel: axios.isCancel(error)
      };
      // return Promise.reject(error);
    });

const remove = (url, params = {}, cancelToken = null) =>
  instance
    .delete(url, { params, cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      loggerError(error);
      return {
        error: true,
        message: "",
        data: null,
        isCancel: axios.isCancel(error)
      };
      // return Promise.reject(error);
    });

const upload = (url, params = {}, cancelToken = null) =>
  instance
    .post(url, params, {
      cancelToken,
      headers: customHeader
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      loggerError(error);
      return {
        error: true,
        message: "",
        data: null,
        isCancel: axios.isCancel(error)
      };
      // return Promise.reject(error);
    });

function mappingResponse(response) {
  let data = response.data;
  if (data.code === apiConst.STATUS.SUCCESS) {
    data = { ...data, error: false, message: "", data: data.data };
  } else {
    data = { ...data, error: true, message: data.message, data: null };
  }
  return response;
}

function mappingError(error) {
  console.log(Object.keys(error));
  console.log(error.toJSON());
}

function loggerError(error) {
  if (error.response) {
    console.error("response", error.response);
    // toast.error(error.response);
  } else if (error.request) {
    console.error("request", error.request);
    // toast.error(error.request);
  } else {
    console.error("message", error);
    // toast.error(error);
  }
}

export { get, post, put, remove, upload };
