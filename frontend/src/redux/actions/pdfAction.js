import axios from "axios"

export const pdfAction = (details) => async (dispatch) => {
    try {
        dispatch({
            type: "RequirePDF"
        })
        console.log(details)

        let currentDetails = {
            name: "Pushkar Pradeep Gramopadhye",
            achievements: "aabkjasf",
            designation: "Assistant System Engineer ",
            oneLiner: "csdcsdc",
            other: "asdasd",
            projects: "Resume Builder",
            skills: "MERNfjkjkegeg"
        }

        let demo = {
            "name": "Pushkar",
            "mobile": "7875594848",
            "email": "gramopadhye37@gmail.com",
            "github": "github/gramo37",
            "linkedin": "csdcsdcsdcsd",
            "personalWebsite": "https://prasanna-gramopadhye.com",
            "twitter": "https://twitter.com",
            "education": [{
                "college_name": "PVG",
                "duration": "2017-2021",
                "degree": "BE Electrical",
                "CGPA": "8.84"
            },
            {
                "college_name": "PVG",
                "duration": "2017-2021",
                "degree": "BE Electrical",
                "CGPA": "8.84"
            }],
            "skills": {
                "proficient": ["C", "C++", "Java", "Python"],
                "familiar": ["Web Development", "JavaScript"]
            },
            "workExperience": [
                {
                    "company_name": "TCS",
                    "duration": "2017-2021",
                    "designation": "Asst Engineer",
                    "description": ["abc", "def", "fuck you"]
                },
                {
                    "company_name": "Google",
                    "duration": "2017-2021",
                    "designation": "Asst Engineer",
                    "description": ["abc", "def", "fuck you"]
                }
            ],
            "projects": [{
                "project_Name": "ssdf",
                "duration": "2019-20",
                "main_title": "A web app",
                "description": ["asa", "asas", "asas"]
            }],
            "extracurricular": ["as", "as", "asa"]
        }


        const link = 'http://localhost:5000/api/v1/fetch-base64-pdf'
        // const { data } = await axios.post(link, details)
        const { data } = await axios.post(link, demo)

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