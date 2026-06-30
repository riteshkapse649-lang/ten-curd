const Product = require("../model/productModule")

exports.getProduct = async (req,res) => {
    try {
        const data = await Product.find()
        res.json({errros:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.postProduct = async (req,res) => {
    try {
        const data = await Product.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errros:true,message:error.message})
    }
}
exports.putproduct = async (req,res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteproduct = async (req,res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
}