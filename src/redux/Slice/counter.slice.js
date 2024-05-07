import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increament:(state,action)=>{
            state.count += 1
        },
        decreament:(state,action)=>{
            state.count -= 1
        }

    }
})

export const {increament,decreament}=counterSlice.actions
export default counterSlice.reducer

