import { combineReducers } from "redux";
import globalReducer from "./global-reducer";
import authReducer from "./auth-reducer";

function wrapperReducer(reducerFunction, reducerPredicate) {
  return (state, action) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer =
      reducerPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
  };
}

const appReducer = combineReducers({
  global: wrapperReducer(globalReducer, ({ type }) => type.startsWith("GLOBAL_")),
  auth: wrapperReducer(authReducer, ({ type }) => type.startsWith("AUTH_")),
});

export default (state, action) => {
  if (["AUTH_LOGOUT"].includes(action.type)) {
    state = undefined;
  }
  return appReducer(state, action);
};
