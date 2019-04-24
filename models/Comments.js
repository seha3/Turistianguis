const mongoose = require("mongoose");
const schema = mongoos.schema;

const CommentSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  comment: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  }
});


module.exports = Comment = mongoose.model('Comments', CommentSchema);