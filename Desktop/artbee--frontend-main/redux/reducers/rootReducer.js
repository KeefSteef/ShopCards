import {combineReducers} from "redux";
import {generalSectionReducer} from "./generalSectionReducer";
import {globalReducer} from "./globalReducer";

const rootReducer = combineReducers({
    general: generalSectionReducer,
    global:  globalReducer
})

export default rootReducer