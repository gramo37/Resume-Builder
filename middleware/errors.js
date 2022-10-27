const ErrorHandler = require('../utils/errorhandler')

module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    // Cast Error in mongo db url
    if(err.name === "CastError"){
        err.message = `Resource not found. Invalid: ${err.path}`
    }

    // Mongoose Duplicate Key Error
    if(err.code === 11000){
        if(Object.keys(err.keyValue)[0] === "email"){
            err.message = "Email already exists. Please Login."
        }
        else {
            err.message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        }
    }

    // Wrong JWT error
    if(err.name === "JsonWebTokenError"){
        err.message = `Json Web Token is invalid, Try Again`;
    }

    // JWT Expire error
    if(err.name === "TokenExpiredError"){
        err.message = `Json web token is Expired, Try Again`
    }

    if(err.name === "PayloadTooLargeError") {
        err.message = `Please Upload a avatar less than 100 kb`
    }

    res.status(err.statusCode).json({
        success: false,
        "message": err.message,
        "code": err.code,
        "error": err.stack,     // err.stack shows exactly where an error has occured
    })
}