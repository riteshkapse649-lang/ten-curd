const mongoose = require("mongoose")

const expanceSchema = new mongoose.Schema({
    price:{
        type:Number,
        required:true
    },
    tranctionId:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("expance",expanceSchema)