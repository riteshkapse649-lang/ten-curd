const {getProduct,postProduct,putproduct,deleteproduct} = require("../controller/productController")

const route = require("express").Router()

route.get("/",getProduct)
route.post("/",postProduct)
route.put("/",putproduct)
route.delete("/",deleteproduct)

module.exports = route