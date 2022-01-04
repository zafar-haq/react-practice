import { combineReducers } from "redux";
import { classReducer } from "./classReducer";

const reducers = combineReducers({
    allClasses : classReducer
})

export default reducers