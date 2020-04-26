import { AuthType } from "../types";
import { setToken, clearStorage } from "../../utils";

export const setAuth = (isAuthenticated = false) => dispatch => {
  dispatch({ type: AuthType.SET_AUTHENTICATED, isAuthenticated });
};

export const register = register => dispatch => {
  dispatch({ type: AuthType.REGISTER, register });
};

export const login = (user = null) => dispatch => {
  if (!user) return;
  setToken("test");
  dispatch({ type: AuthType.LOGIN, user });
};

export const logout = () => dispatch => {
  clearStorage();
  dispatch({ type: AuthType.LOGOUT });
};

export const forceLogout = () => {
  logout();
};
