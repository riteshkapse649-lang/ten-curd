const mongoose= require("mongoose")

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    salary:{
         type:String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("emp",empSchema)
