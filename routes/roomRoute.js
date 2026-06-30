const {getRoom,postRoom,putRoom,deleteRoom} = require("../controller/roomController")

const route = require("express").Router()

route.get("/",getRoom)
route.post("/",postRoom)
route.put("/:id",putRoom)
route.delete("/:id",deleteRoom)

module.exports = route
