const express = require("express");
const app = express();
const PORT = 5500;
require("dotenv").config();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");

connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  return res.send("Hello world");
});
app.use("/product", require("./routes/product"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  //listening requests only after connected to mongoDB
  app.listen(PORT, (req, res) => {
    console.log(`server is listening on port ${PORT}`);
  });
});
