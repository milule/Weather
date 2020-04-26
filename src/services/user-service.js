import { post, put } from "../utils/axios";
import { apiConst } from "../constanst";

const login = ({ username, password }, cancelToken) => {
  return post(apiConst.URL.LOGIN, { account: username, password }, cancelToken);
};

const logout = cancelToken => {
  return put(apiConst.URL.LOGOUT, {}, cancelToken);
};

const register = ({ username, password }, cancelToken) => {
  return post(apiConst.URL.REGISTER, { username, password }, cancelToken);
};

export const userService = {
  login,
  logout,
  register
};
