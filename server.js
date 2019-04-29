const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Data = require('./models/Comments')

const cors = require('cors');
const app = express().use('*', cors());
const logger = require('morgan');
//const path = require('path');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());


app.use(logger("dev"))

const db = require('./config/dbKey').mongoURI;//req config for mongoDB

mongoose//create connection to DB
	.connect(
		db, {
			useNewUrlParser: true
		})
	.then(() => console.log('MongoDB has been connected'))
	.catch(err => console.log(err));
//this is our get method
//this method fetches all available data in db
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true, data: data});
  });
})

//this is our update method
//this method overwrites existing data in // DEBUG:
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if(err) return res.json({ success: false, error: err});
    return res.json({ success: true});
  });
});


//this is our delete method
//this method will remove existing data in our db

router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  })
})

//this is our create method
//this will add new data to our db
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message, name } = req.body;

  if((!id && id !== 0) || (!message&&!name)){
    return res.json({
      success: false,
      error: "Invalid inputs"
    });
  }
  data.name = name;
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use("/api", router);

// get request for comments from mysql
// app.get('/box', function (req, res) {
//   console.log("funciona")
//   box.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       console.log("error")
//       res.json(data);
//     }
//   });
// });

const port = 5000;
app.listen(port, () => console.log('Server running on port 5000'));



module.exports = app;
