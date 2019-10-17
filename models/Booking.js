const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a User Schema
const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true
  },
  time: {
    type: Number,
    required: true
  },

  sourceDock: {
    type: String,
    required: true
  },
  paymentAmnt: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// I have created this schema, now I want to compile it to a model and export it
module.exports = Booking = mongoose.model("Booking", userSchema);
