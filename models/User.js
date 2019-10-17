const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isVitian: {
    type: Boolean,
    required: true
  },
  designation: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// I have created this schema, now I want to compile it to a model and export it
module.exports = Users = mongoose.model("Users", userSchema);
