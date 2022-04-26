import axios from "axios";
import { EDIT_CAR, GET_CAR } from "../types";

export const getCar = () => {
    return (dispatch) => {
        dispatch({ type: `${GET_CAR}_LOADING`});

        axios({
            method: 'GET',
            url: 'https://rent-cars-api.herokuapp.com/admin/car',
        })
        .then((response) => {
            dispatch({
                type: `${GET_CAR}_FULFILLED`,
                payload: response.data,
              });
        })
        .catch((error) => {
            dispatch({
              type: `${GET_CAR}_ERROR`,
              error: error.message,
            });
        });
    };
};

export const editCard = (id, data) => {
    return (dispatch) => {
        dispatch({ type: `${EDIT_CAR}_LOADING` });

        axios({
            method: 'PUT',
            url: 'https://rent-cars-api.herokuapp.com/admin/car',
            data,
        })
        .then(() => {
            dispatch({
              type: `${EDIT_CAR}_FULFILLED`,
              // payload: response.data,
            });
            dispatch(getCar());
        })
        .catch((error) => {
            dispatch({
              type: `${EDIT_CAR}_ERROR`,
              error: error.message,
            });
        });
    };
};