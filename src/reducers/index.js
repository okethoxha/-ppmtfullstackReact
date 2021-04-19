import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "../components/Project/projectReducer";

export default combineReducers({
    errors: errorReducer,
    project: projectReducer
});
