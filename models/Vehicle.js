const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  v_type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    required: true,
    default: true
  },
  source_dock: {
    type: String,
    required: true
  }
});
module.exports = Vehicle = mongoose.model("Vehicle", vehicleSchema);
