const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;

app.use(cors(), bodyParser.json());

app.post("/login", db.getUser);

app.post("/registration", db.postUsers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
