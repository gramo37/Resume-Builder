import axios from "axios"

export const pdfAction = (details) => async (dispatch) => {
    try {
        dispatch({
            type: "RequirePDF"
        })
        console.log(details)
        
        let demo = {
            "name": "Prasan",
            "email": "gramopadhye37@gmail.com",
            "address": "Pune",
            "mobile": "7875594848",
            "github": "github",
            "linkedin": "linkedIn",
            "twitter": "twitter",
            "personalWebsite": "prasanna",
            "educationalDetail": [
              {
                "degree": "BE",
                "location": "Pune",
                "collegename": "PVG",
                "grade": "8.84",
                "duration": "2022-09-28 to present"
              }
            ],
          
            "workExperience": [
              {
                "CompanyName": "TCS",
                "designation": "Asst",
                "Location": "Pune",
                "description": ["C", "C++", "Java"],
                "duration": "2010-06-10 to present"
              }
            ],
            "projects": [
              {
                "projectName": "nnn",
                "techstacks": "bgf",
                "briefInfo": "fgbfgb"
              }
            ],
            "skills": [
              {
                "programmingLangs": "C,C++",
                "librariesOrFrameworks": "hello",
                "toolsOrPlatforms": "hghm",
                "databases": "mgh"
              }
            ],
            "certificates": [
              {
                "certificate": "g"
              }
            ],
            "hobbies": [
              {
                "hobby": "gre"
              }
            ],
            "extraCurricular": [
              {
                "activity": "erg"
              }
            ],
            "achievements": [
              {
                "achievement": "ger"
              }
            ]
          }
          


        const link = 'http://localhost:5000/api/v1/fetch-base64-pdf'
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