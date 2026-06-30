const mongoose = require("mongoose")

const systemSchema = new mongoose.Schema({
    systemId:{
        type:Number,
        required:true
    },
    statusCode:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("system",systemSchema)