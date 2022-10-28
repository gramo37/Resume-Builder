const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
// dotenv.config({path: path.join(process.cwd(), "config/config.env") })
var cookieParser = require('cookie-parser');
const cors = require("cors");
const errorHandler = require("./middleware/errors");
const bodyParser = require('body-parser');

// connectToDatabase();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Frontend
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.static("public"));

// Routes
app.use("/api/v1", require('./routes/resumeRoute'))

// Error middleware
app.use(errorHandler)

app.listen(process.env.PORT, () => {
   console.log(`Server is running on PORT: ${process.env.PORT}`);
});