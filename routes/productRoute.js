const {getProduct,postProduct,putproduct,deleteproduct} = require("../controller/productController")

const route = require("express").Router()

route.get("/",getProduct)
route.post("/",postProduct)
route.put("/:id",putproduct)
route.delete("/:id",deleteproduct)

module.exports = route
