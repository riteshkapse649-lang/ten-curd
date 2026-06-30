("/api/emp")
"/api/stud"
"/api/room"
"/api/product"
"/api/event"
"/api/expance"
"/api/system"
("/api/cart")
const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    cartTotal:{
        type:String,
        requird:true
    }
},{timestamps:true})

module.exports = mongoose.model("cart",cartSchema)
