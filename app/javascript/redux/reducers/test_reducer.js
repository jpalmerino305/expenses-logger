import * as actionTypes from '../constants/test_action_types';

let initialState = {
  loading: false,
  message: ''
};

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case actionTypes.SET_MESSAGE:
      return { ...state, message: action.payload };

    default:
      return state;
  }
};

export default testReducer;