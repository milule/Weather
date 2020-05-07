import { produce } from "immer";
import { AuthType } from "../types";

const initialState = {
  isAuth: false,
  token: "",
  user: null,
  register: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthType.SET_AUTHENTICATED:
      return produce(state, (draft) => {
        draft.isAuth = action.isAuth;
        draft.user = action.user ? action.user : state.user;
      });
    case AuthType.SET_TOKEN:
      return produce(state, (draft) => {
        draft.token = action.token;
      });
    case AuthType.LOGIN: {
      return produce(state, (draft) => {
        draft.isAuth = true;
        draft.user = action.user;
      });
    }
    case AuthType.LOGOUT: {
      return produce(state, (draft) => {
        draft.isAuth = false;
        draft.user = null;
      });
    }
    case AuthType.REGISTER: {
      return produce(state, (draft) => {
        draft.register = action.register;
      });
    }
    default:
      return state;
  }
};

export default authReducer;
