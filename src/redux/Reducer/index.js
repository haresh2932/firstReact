import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

export const rootReduser=combineReducers({
    counter:counterReducer
})