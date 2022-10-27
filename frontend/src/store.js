import {configureStore} from "@reduxjs/toolkit"
import { pdfReducers } from "./redux/reducers/pdfReducer";
import { storeInfoReducer } from "./redux/reducers/storeInfoReducer";

const store = configureStore({
    reducer: {
        pdf: pdfReducers,
        info: storeInfoReducer
    }
})

export default store;