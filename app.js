const express = require("express");
const mongoose = require("mongoose");
require("dns").setServers(["8.8.8.8", "1.1.1.1"]); //imp
require("dotenv/config")
const cors = require("cors")
const empRoute = require("./routes/epmRoute")
const StudRoute = require("./routes/studRoute")
const roomRoute = require("./routes/roomRoute")
const productRoute = require("./routes/productRoute")
const eventRoute = require("./routes/eventRoute")
const expanceRoute = require("./routes/expanceRoute")
const systemRoute = require("./routes/systemRoute")
const cartRoute = require("./routes/cartRoute")
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("home");
});
app.use("/api/emp",empRoute)
app.use("/api/stud",StudRoute)
app.use("/api/room",roomRoute)
app.use("/api/product",productRoute)
app.use("/api/event",eventRoute)
app.use("/api/expance",expanceRoute)
app.use("/api/system",systemRoute)
app.use("/api/cart",cartRoute)
app.listen(process.env.PORT);



async function db() {
  try {
    const res = await mongoose.connect(process.env.DB);
    console.log(res.STATES.connected);
  } catch (error) {
    console.log(error.message);
  }
}
db()
