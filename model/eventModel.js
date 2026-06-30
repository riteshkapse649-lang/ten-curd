const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventCode:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("event",eventSchema)