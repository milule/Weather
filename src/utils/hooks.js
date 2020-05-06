import { useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { authAction } from "../redux/actions";
import axios from "axios";
import io from "socket.io-client";

// For authentication
export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth, shallowEqual);

  return {
    isAuth: auth.isAuth,
    user: auth.user,
    setToken: (token) => dispatch(authAction.initToken(token)),
    setAuth: (isAuth) => dispatch(authAction.setAuth(isAuth)),
    login: (user) => dispatch(authAction.login(user)),
    logout: () => dispatch(authAction.logout())
  };
};

// For cancel token axios
export const useCancelToken = () => {
  const cancelToken = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = cancelToken.current;
    return () => source.cancel("Unmount component");
  }, []);

  return cancelToken.current.token;
};

// For socket
export const useSocket = () => {
  const { user } = useSelector(({ auth }) => auth);
  const socket = useRef(null);

  useEffect(() => {
    if (!user || !user.id) return;

    socket.current = io("http://localhost", {
      path: "/socket",
      query: {
        role: user.role,
        employeeid: user.employeeid,
      },
    });

    return () => socket.current && socket.current.close();
  });
  return [socket.current];
};

// For component is mounted
export const useMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  return isMounted.current;
};