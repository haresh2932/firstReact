import { applyMiddleware, createStore } from "redux"
import { rootReduser } from "./Reducer"
import { thunk } from "redux-thunk"

export const configStore=()=>{
    const store=createStore(rootReduser,applyMiddleware(thunk))
    return store
}
    
