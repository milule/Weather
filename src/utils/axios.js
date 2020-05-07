import axios from "axios";
import http from "http";
import https from "https";
import { toast } from "react-toastify";
import { axiosEvn } from "../config";
import { apiConst } from "../constanst";
import { getToken } from "./storage";

let context = {};

const basicHeader = {
  "Content-Type": "application/json",
};

const customHeader = {
  "Content-Type": "multipart/form-data",
};

const config = {
  baseURL: axiosEvn.DEV_API_URL,
  responseType: "json",
  timeout: 30000,
  maxContentLength: 5000,
  maxBodyLength: 5000,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  headers: basicHeader,
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    context.loading(config.url);
    config.headers["x-access-token"] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    context.loading(response.config.url);
    return mappingResponse(response);
  },
  (error) => {
    processError(error);
    loggerError(error);
    return Promise.reject(mappingError(error));
  }
);

const get = (url, params = {}, cancelToken = null) =>
  instance
    .get(url, { params, cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(({ data }) => {
      return data;
    });

const post = (url, params = {}, cancelToken = null) =>
  instance
    .post(url, params, { cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(({ data }) => {
      return data;
    });

const put = (url, params = {}, cancelToken = null) =>
  instance
    .put(url, params, { cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(({ data }) => {
      return data;
    });

const remove = (url, params = {}, cancelToken = null) =>
  instance
    .delete(url, { params, cancelToken })
    .then(({ data }) => {
      return data;
    })
    .catch(({ data }) => {
      return data;
    });

const upload = (url, params = {}, cancelToken = null) =>
  instance
    .post(url, params, {
      cancelToken,
      headers: customHeader,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(({ data }) => {
      return data;
    });

function mappingResponse(response) {
  let data = response.data;
  if (data.code === apiConst.STATUS.SUCCESS) {
    data = { error: false, message: "", data: data.data };
  } else {
    data = { error: true, message: data.message, data: null };
  }
  return { data };
}

function mappingError(error) {
  let data;
  const { response } = error;
  const { status } = response || {};
  if (status === 401) {
    data = {
      error: true,
      message: "",
      data: null,
      isUnAuth: true,
      isCancel: axios.isCancel(error),
    };
  } else {
    data = {
      error: true,
      message: "",
      data: null,
      isUnAuth: false,
      isCancel: axios.isCancel(error),
    };
  }
  return { data };
}

function processError(error) {
  const { response } = error;
  const { status } = response || {};
  switch (status) {
    case 401:
      context.logout();
      break;
    default:
      break;
  }
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

function createCancelToken() {
  return axios.CancelToken.source();
}

const setContext = (initContext) => {
  context = initContext;
};

export { get, post, put, remove, upload, setContext, createCancelToken };
