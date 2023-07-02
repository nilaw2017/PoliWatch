const express = require("express");
const app = express();
require("dotenv").config();

const names = require("./modules/name.js");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
  console.log(names);
  res.send("Hello World");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Server has been started in PORT =>", process.env.PORT);
});
