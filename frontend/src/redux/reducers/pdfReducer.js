import {createReducer} from "@reduxjs/toolkit";

export const pdfReducers = createReducer({},{
    RequirePDF: (state) => {
        state.loading = true
        state.data = ""
        state.error = ""
    },
    PDFSuccess: (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ""
    },
    PDFFail: (state, action) => {
        state.loading = false
        state.data = ""
        state.error = action.payload
    }
})