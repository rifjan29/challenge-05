import { combineReducers } from "redux";
import carByIdReducer from "./carByIdReducer";
import carReducer from "./carReducer";


export default combineReducers({
    car: carReducer,
    carById: carByIdReducer,
});