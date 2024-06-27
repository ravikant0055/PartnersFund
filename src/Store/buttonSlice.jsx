import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        }
    }

});

export const {add,remove} = buttonSlice.actions;
export default buttonSlice.reducer;