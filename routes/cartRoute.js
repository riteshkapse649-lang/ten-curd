const {getCart,postCart,putCart,deleteCart} = require("../controller/cartController")

const route = require("express").Router()

route.get("/",getCart)
route.post("/",postCart)
route.put("/:id",putCart)
route.delete("/:id",deleteCart)

module.exports = route
