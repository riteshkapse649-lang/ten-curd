const {getSystem,postSystem,putSystem,deleteSystem} = require("../controller/systemController")

const route = require("express").Router()

route.get("/",getSystem)
route.post("/",postSystem)
route.put("/:id",putSystem)
route.delete("/:id",deleteSystem)

module.exports = route
