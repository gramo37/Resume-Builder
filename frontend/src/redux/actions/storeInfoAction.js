// import axios from "axios"

export const storeInfoAction = (details) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireStoreInfo"
        })

        // Store all the details in local storage
        let convertedDetails = JSON.stringify(details)
        localStorage.setItem("UserInfo", convertedDetails)

        // Post request
        // const {data} = await axios.post('http://127.0.0.1:5000/generatePdf', details)

        dispatch({
            type: "StoreInfoSuccess",
            payload: details
        })
    } catch (error) {
        dispatch({
            type: "StoreInfoFail",
            payload: error.response.data
        })
    }
}