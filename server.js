const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//const path = require('path');
app.use(bodyParser);

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

const db = require('./config/dbKey').mongoURI;//req config for mongoDB

mongoose//create connection to DB
	.connect(
		db, {
			useNewUrlParser: true
		})
	.then(() => console.log('MongoDB has been connected'))
	.catch(err => console.log(err));



const port = 1337;
app.listen(port, () => console.log('Server running on port 3000'));

app.get('/url', (req, res, next) => {
	res.json([ 'Tony', 'Lisa', 'Michael', 'Ginger', 'Food' ]);
});


app.get("/endpoint", (req,res ) => {
	res.send("hola silve ")
})

module.exports = app;
