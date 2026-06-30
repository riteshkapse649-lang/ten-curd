const mongoose = require("mongoose")


const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rNo:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("room",roomSchema)