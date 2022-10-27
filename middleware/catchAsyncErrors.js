module.exports = (theFunc)=>(req, res, next)=>{
    Promise.resolve(theFunc(req, res, next)).catch(next);           // Same as try catch first the function tries to resolves the function and if errors catch method is used
}