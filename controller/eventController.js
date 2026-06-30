const Event = require("../model/eventModel")

exports.getEvent = async (req,res) => {
    try {
        const data = await Event.find()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.postEvent = async (req,res) => {
    try {
        const data = await Event.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.putEvent = async (req,res) => {
    try {
        const data = await Event.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteEvent = async (req,res) => {
    try {
        const data = await Event.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}