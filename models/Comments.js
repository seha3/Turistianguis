const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    message: String,
    name: String
  },
  { timestamps: true }
);


module.exports = Data = mongoose.model('Data', DataSchema);
