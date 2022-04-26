import axios from "axios";
import { GET_CAR_BY_ID } from "../types";

export const getCarById = (id) => {
    return (dispatch) => {
    dispatch({ type: `${GET_CAR_BY_ID}_LOADING` });

    axios({
      method: "GET",
      // url: `https://62601c3e53a42eaa0700492d.mockapi.io/api/v1/cars${id}`,
      url: `https://rent-cars-api.herokuapp.com/admin/car${id}`,
    })
      .then((response) => {
        dispatch({
          type: `${GET_CAR_BY_ID}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CAR_BY_ID}_ERROR`,
          error: error.message,
        });
      });
  };
}

export const handleCarByID = (action) => {
  return (dispatch) => {
    dispatch({
      type: `${GET_CAR_BY_ID}_FULFILLED`,
      payload: action,
    });
  };
};