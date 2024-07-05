import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./buttonSlice";
import containerSlice from "./containerSlice";

const Store = configureStore({
    reducer : {
        button : buttonSlice,
        container : containerSlice
    }
});

export default Store;