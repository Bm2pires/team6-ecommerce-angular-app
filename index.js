const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
var cors = require("cors");
const app = express();

app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
  res.json({ info: "GET - response - Node, express, postgres ready... " });
});

// define more URL
app.post("/ecomdb/users", db.postUsers);

const port = 3000;
app.listen(port, () => {
  console.log("Web server is listening on port 3000 ");
});
