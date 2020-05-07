import { post, put, get } from "../utils/axios";
import { apiConst, effectConst } from "../constanst";

const me = (cancelToken) => {
  return get(apiConst.URL.ME, {}, cancelToken);
};

const login = ({ username, password }, cancelToken) => {
  return post(apiConst.URL.LOGIN, { username, password }, cancelToken);
};

const logout = (cancelToken) => {
  return put(apiConst.URL.LOGOUT, {}, cancelToken);
};

const register = ({ username, password }, cancelToken) => {
  return post(apiConst.URL.REGISTER, { username, password }, cancelToken);
};

export const userService = {
  me,
  login,
  logout,
  register,
  effect: {
    me: effectConst.ME,
    login: effectConst.LOGIN,
  },
};
