const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//const path = require('path');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
     res.set({
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
       'Access-Control-Allow-Headers': 'Content-Type'
     })
     next();
   })

const db = require('./config/dbKey').mongoURI;//req config for mongoDB

mongoose//create connection to DB
	.connect(
		db, {
			useNewUrlParser: true
		})
	.then(() => console.log('MongoDB has been connected'))
	.catch(err => console.log(err));

app.get('/url', function(req, res){
   res.send("Stuff");
});

const port = 5000;
app.listen(port, () => console.log('Server running on port 5000'));



module.exports = app;
