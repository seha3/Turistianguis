const express = require('express');
// const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser);
const port = 1337;
app.listen(port, () => console.log('Server running on port 3000'));

app.get('/url', (req, res, next) => {
	res.json([ 'Tony', 'Lisa', 'Michael', 'Ginger', 'Food' ]);
});


app.get("/endpoint", (req,res ) => {
	res.send("hola silve ")
})

module.exports = app;
