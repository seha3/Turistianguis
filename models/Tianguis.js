const mongoose = require("mongoose");
const Schema = mongoose.schema;

const TianguisSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  hours: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
});


module.exports = Tianguis = mongoose.model('Tianguis', TianguisSchema);                 