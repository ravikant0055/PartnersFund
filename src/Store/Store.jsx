import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./buttonSlice";

const Store = configureStore({
    reducer : {
        button : buttonSlice,
    }
});

export default Store;