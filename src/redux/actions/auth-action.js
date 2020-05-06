import { AuthType } from "../types";
import { setToken, clearStorage } from "../../utils";

const setAuth = (isAuth = false) => (dispatch) => {
  dispatch({ type: AuthType.SET_AUTHENTICATED, isAuth });
};

const register = (register) => (dispatch) => {
  dispatch({ type: AuthType.REGISTER, register });
};

const login = (user = null) => (dispatch) => {
  if (!user) return;
  dispatch({ type: AuthType.LOGIN, user });
};

const logout = () => (dispatch) => {
  clearStorage();
  dispatch({ type: AuthType.LOGOUT });
};

const initToken = (token) => (dispatch) => {
  setToken(token);
  dispatch({ type: AuthType.SET_TOKEN, token });
};

export const authAction = {
  setAuth,
  register,
  login,
  logout,
  initToken,
};
