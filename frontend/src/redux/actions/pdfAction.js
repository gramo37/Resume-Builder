import axios from "axios"

export const pdfAction = (details) => async (dispatch) => {
    try {
        dispatch({
            type: "RequirePDF"
        })

        // const link = 'http://localhost:5000/api/v1/fetch-base64-pdf'
        const link = '/api/v1/fetch-base64-pdf'
        // const link = 'https://resume-builder-using-mern.herokuapp.com/api/v1/fetch-base64-pdf'
        const { data } = await axios.post(link, details)

        // const link = 'https://openapis.herokuapp.com/generatePdf'
        // const { data } = await axios.post(link, details)

        dispatch({
            type: "PDFSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "PDFFail",
            payload: error.response.data
        })
    }
}