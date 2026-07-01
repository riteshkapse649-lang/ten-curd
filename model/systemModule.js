const mongoose = require("mongoose")

const systemSchema = new mongoose.Schema({
    systemId:{
        type:String,
        required:true
    },
    statusCode:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("system",systemSchema)
