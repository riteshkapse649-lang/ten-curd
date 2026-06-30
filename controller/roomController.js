const Room = require("../model/roomModule")

exports.getRoom = async (req,res) => {
    try {
        const data = await Room.find()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.postRoom = async (req,res) => {
    try {
        const data = await Room.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.putRoom = async (req,res) => {
    try {
        const data = await Room.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteRoom = async (req,res) => {
    try {
        const data = await Room.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}