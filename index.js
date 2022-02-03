const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const db = require("./db");

// express returns an object
const app = express();
const port = 3000;

app.use(cors(), bodyParser.json());

app.post("/register", db.postUsers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});