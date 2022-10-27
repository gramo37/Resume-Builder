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
    await pdf.create(pdfTemplate(req.body), {
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
