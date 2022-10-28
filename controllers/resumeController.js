const catchAsyncError = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const pdf = require('html-pdf');
const pdfTemplate = require('../documents/template1');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const pdf2base64 = require('pdf-to-base64');

let width = 794, height = 1122;

exports.createPDF = catchAsyncError(async (req, res, next) => {
    console.log(req.body)
    pdf.create(pdfTemplate(req.body), {
        width: `${width}px`,
        height: `${height}px`,
        border: '0px',
        viewportSize: {
            width,
            height
        }
    }).toFile(`${__dirname}/result.pdf`, (err) => {
        // pdf.create(pdfTemplate(req.body), {}).toFile('../controllers/result.pdf', (err) => {
        console.log(err);
        if (err) res.send(Promise.reject());
        res.send(Promise.resolve());
    });
});

exports.fetchPDF = catchAsyncError(async (req, res, next) => {
    res.sendFile(`${__dirname}/result.pdf`)
});

exports.fetchBase64PDF = catchAsyncErrors(async (req, res, next) => {
    // Address is a new field that can be added
    let subTitle = `${req.body?.email ? req.body.email + " | " : ""} 
    ${req.body?.mobile ? req.body.mobile + " | " : ""}
    ${req.body?.github ? `<a href=${req.body?.github} target="_blank">Github</a>` + " | " : ""}
    ${req.body?.twitter ? `<a href=${req.body?.twitter} target="_blank">Twitter</a>` + " | " : ""}
    ${req.body?.linkedin ? `<a href=${req.body?.linkedin} target="_blank">Linked In</a>` + " | " : ""}
    ${req.body?.personalWebsite ? `<a href=${req.body?.personalWebsite} target="_blank">Personal Website</a>` + " | " : ""}
    ${req.body?.address ? req.body.address + " | " : ""}`
    
    if(subTitle.charAt(subTitle.length-1) === '|') subTitle.splice(subTitle.length-1)

    let data = {
      "name": req.body?.name ? req.body.name : "",
      "subTitle": subTitle,
      "educationalDetail": req.body?.educationalDetail ? req.body.educationalDetail : "",
      "workExperience": req.body?.workExperience ? req.body.workExperience : [],
      "projects": req.body?.projects ? req.body.projects : [],
      "skills": req.body?.skills ? req.body.skills : {},
      "extracurriculars": req.body?.extracurriculars ? req.body.extracurriculars : [],
    }

    await pdf.create(pdfTemplate(data), {
        width: `${width}px`,
        height: `${height}px`,
        border: '0px',
        viewportSize: {
            width,
            height
        }
    }).toFile(`${__dirname}/result.pdf`, (err) => {
        if (err) res.send(Promise.reject());
        // Convert result.pdf to base 64
        pdf2base64(`${__dirname}/result.pdf`)
            .then(
                (response) => {
                    res.status(200).json({
                        data: response
                    })
                }
            )
            .catch(
                (error) => {
                    res.status(404).json({
                        data: "Something went wrong",
                        error
                    })
                }
            )
    })
})
