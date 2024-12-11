const express = require("express");
const dotenv = require("dotenv");

//Load config
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(
  PORT,
  console.log(
    `Server is runnig in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
