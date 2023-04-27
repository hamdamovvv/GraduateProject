import {configureStore} from "@reduxjs/toolkit";
import probkaReducer from "./slices/probkaSlice";

 export default  configureStore({
    reducer: {
        probkaReducer
    }
})
