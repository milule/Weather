import {GlobalType} from '../types';

const setLoading = (effect) => (dispatch) => {
    dispatch({type: GlobalType.SET_LOADING, effect});
}

export const globalAction = {
    setLoading
}