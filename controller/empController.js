const Emp = require("../model/emp")

exports.getEmp = async (req,res) => {
    try {
        const data = await Emp.find()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,mesage:error.mesage})
    }
}

exports.postEmp = async (req,res) => {
    try {
        const data = await Emp.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}

exports.putEmp = async (req,res) => {
    try {
        const data = await Emp.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}

exports.deleteEmp = async (req,res) => {
    try {
        const data = await Emp.findOneAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}