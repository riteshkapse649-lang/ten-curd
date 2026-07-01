const mongoose = require("mongoose")

const expanceSchema = new mongoose.Schema({
    price:{
        type:String,
        required:true
    },
    tranctionId:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("expance",expanceSchema)
