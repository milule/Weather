import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  setAuth,
  login,
  logout,
  register,
  forceLogout
} from "../redux/actions";
import { getToken } from "../utils/storage";

const AuthWrapper = ({ children, ...rest }) => {
  const { isAuthenticated, setAuthenticated, checkAuthenticated } = useAuth();

  if (checkAuthenticated()) {
    setAuthenticated(true);
  }

  useEffect(() => {}, [isAuthenticated]);

  return <>{children}</>;
};

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    ({ auth }) => auth,
    shallowEqual
  );

  function checkAuthenticated() {
    return getToken() && getToken() !== "";
  }

  function setAuthenticated(isAuth) {
    dispatch(setAuth(isAuth));
  }

  function signUp(user) {
    dispatch(register(user));
  }

  function signIn(user) {
    dispatch(login(user));
  }

  function signOut() {
    dispatch(logout());
  }

  function forceSignOut() {
    dispatch(forceLogout());
  }

  return {
    isAuthenticated,
    checkAuthenticated,
    setAuthenticated,
    forceSignOut,
    signUp,
    signIn,
    signOut,
    user
  };
};

export { useAuth, AuthWrapper };
