const {getStud,postStud,putStud,deleteStud} = require("../controller/studController")

const route = require("express").Router()

route.get("/",getStud)
route.post("/",postStud)
route.put("/:id",putStud)
route.delete("/:id",deleteStud)

module.exports = route
