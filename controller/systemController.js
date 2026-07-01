const System = require("../model/systemModule")

exports.getSystem = async (req,res) => {
    try {
        const data = await System.find()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}
exports.postSystem = async (req,res) => {
    try {
        const data = await System.create()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.putSystem = async (req,res) => {
    try {
        const data = await System.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}

exports.deleteSystem = async (req,res) => {
    try {
        const data = await System.findOneAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}
