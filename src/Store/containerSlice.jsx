import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers:{
        addCon(state,action){
            // console.log('Reducer addCon called with:', action.payload);
            state.push(action.payload)
        },
        removeCon(state,action){
             return  state.filter(item => item.id !== action.payload)
            // state = filtered ;
        }
    }

});

export const {addCon,removeCon} = containerSlice.actions;
export default containerSlice.reducer;