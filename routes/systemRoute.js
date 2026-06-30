const {getSystem,postSystem,putSystem,deleteSystem} = require("../controller/systemController")

const route = require("express").Router()

route.get("/",getSystem)
route.post("/",postSystem)
route.put("/",putSystem)
route.delete("/",deleteSystem)

module.exports = route