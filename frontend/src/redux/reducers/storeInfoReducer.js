import {createReducer} from "@reduxjs/toolkit"

export const storeInfoReducer = createReducer({
    // Get data from local storage and set it equal to state.data
    data: JSON.parse(localStorage.getItem("UserInfo"))
}, {
    RequireStoreInfo: (state) => {
        state.loading = true
        state.data = ""
        state.error = ""
    },
    StoreInfoSuccess: (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ""
    },
    StoreInfoFail: (state, action) => {
        state.loading = false
        state.data = ""
        state.error = action.payload
    }
})