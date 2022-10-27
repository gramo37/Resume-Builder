const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(process.env.URI).then(()=>{
        console.log("Db connected");
    })
}

module.exports = connectToDatabase;