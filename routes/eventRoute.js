const {getEvent,postEvent,putEvent,deleteEvent} = require("../controller/eventController")

const route = require("express").Router()

route.get("/",getEvent)
route.post("/",postEvent)
route.put("/:id",putEvent)
route.delete("/:id",deleteEvent)

module.exports = route
