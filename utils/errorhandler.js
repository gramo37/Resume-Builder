// This class changes err.message and err.statusCode
class ErrorHandler extends Error{
    constructer(message, statusCode){
        this.message = message    
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructer);     // Enables err.stack
    }
}

module.exports = ErrorHandler