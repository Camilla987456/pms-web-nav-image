var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var interestedSchema = new Schema({
  courseName: String,
  name: String,
  email: String,
  mobile: String,
  placedOn: String,
});

module.exports = mongoose.model("Interest", interestedSchema);
