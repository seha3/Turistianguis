var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../Mysql/index.js');
// var items = require('../database-mongo');
var app = express();
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


exports.makeInput = (req,res) => {
  db.makeInput()
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err =>{
    console.log("this is my err:", err)
  });
};
