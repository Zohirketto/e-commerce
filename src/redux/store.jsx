import { configureStore } from "@reduxjs/toolkit";
import commerceSlicereducer from "./Slice"
const store = configureStore({
    reducer:{
        commerce: commerceSlicereducer
    }
})

export default store;