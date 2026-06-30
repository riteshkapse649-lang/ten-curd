const {getExpance,postExpance,putExpance,deleteExpance} = require("../controller/expanceController")

const route = require("express").Router()

route.get = ("/",getExpance)
route.post("/",postExpance)
route.put("/",putExpance)
route.delete("/",deleteExpance)

module.exports = route
