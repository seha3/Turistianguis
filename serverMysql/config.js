const express = require("express");
const bodyParser = require("body-parser");
const route = require('../server/routes.js')
const db = require('../Mysql/index.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));


app.post("/home", route.makeInput)


module.exports = app;
