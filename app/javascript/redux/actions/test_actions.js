import * as actionTypes from '../constants/test_action_types';


export const setLoading = (loading) => (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING, payload: loading });
};

export const setMessage = (message) => (dispatch) => {
  dispatch({ type: actionTypes.SET_MESSAGE, payload: message });
};