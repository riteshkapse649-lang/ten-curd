const {getExpance,postExpance,putExpance,deleteExpance} = require("../controller/expanceController")

const route = require("express").Router()

route.get ("/",getExpance)
route.post("/",postExpance)
route.put("/:id",putExpance)
route.delete("/:id",deleteExpance)

module.exports = route
