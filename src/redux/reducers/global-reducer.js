import { produce } from "immer";
import { GlobalType } from "../types";

const initialState = {
  loading: {},
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalType.SET_LOADING:
      return produce(state, (draft) => {
        draft.loading[action.effect] = !draft.loading[action.effect];
      });
    default:
      return state;
  }
};

export default globalReducer;
