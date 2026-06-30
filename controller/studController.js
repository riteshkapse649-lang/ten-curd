const Stud = require("../model/empStud")

exports.getStud = async (req,res) => {
    try {
        const data = await Stud.find()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,mesage:error.mesage})
    }
}

exports.postStud = async (req,res) => {
    try {
        const data = await Stud.create(req.body)
        res.json({errrors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.putStud = async (req,res) => {
    try {
        const data = await Stud.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}

exports.deleteStud = async (req,res) => {
    try {
        const data = await Stud.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.mesage})
    }
}