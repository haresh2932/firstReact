import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import counterSlice from "../Slice/counter.slice";
import Product from "../../user/containers/Products/Product";

export const rootReduser=combineReducers({
    counter:counterReducer,
    counter_sllice:counterSlice,
    // product:Product
})