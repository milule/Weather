import { AuthType } from "../types";

const initialState = {
  isAuthenticated: false,
  user: null,
  register: null,
  loading: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthType.SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    case AuthType.LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    }
    case AuthType.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    }
    case AuthType.REGISTER: {
      return {
        ...state,
        register: action.register
      };
    }
    default:
      return state;
  }
};
export default authReducer;
