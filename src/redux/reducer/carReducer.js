import { EDIT_CAR, GET_CAR } from "../types";


const initialState = {
    data: [],
    isLoading: true,
    error: null,
};

const carReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      case `${GET_CAR}_LOADING`:
        return {
          ...state,
        };
      case `${GET_CAR}_FULFILLED`:
        return {
          ...state,
          data: payload,
          isLoading: false,
        };
      case `${GET_CAR}_ERROR`:
        return {
          ...state,
          isLoading: false,
          error: error,
        };
      case `${EDIT_CAR}_LOADING`:
        return {
          ...state,
          isLoading: true,
        };
      case `${EDIT_CAR}_FULFILLED`:
        return {
          ...state,
          isLoading: false,
        };
      case `${EDIT_CAR}_ERROR`:
        return {
          ...state,
          isLoading: false,
          error: error,
        };
      default:
        return {
          ...state,
        };
    }
  };

  export default carReducer;