import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers:{
        add(state,action){
            state = [...state, action.payload]; // Create a new array with updated state
            return state;
        },
        remove(state,action){
            console.log(action , "deleting ")
            return state.filter(item => item.id !== action.payload)
             return [];
        }
    }

});

export const {add,remove} = buttonSlice.actions;
export default buttonSlice.reducer;