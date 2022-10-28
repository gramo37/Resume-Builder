const express = require("express");
const { createPDF, fetchPDF, fetchBase64PDF, temp } = require("../controllers/resumeController");

const app = express.Router();

app.route('/create-pdf').post(createPDF);
app.route('/fetch-pdf').get(fetchPDF);
app.route('/fetch-base64-pdf').post(fetchBase64PDF);

module.exports = app;