const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
  users: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  branch: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Profile = mongoose.model("Profile", profileSchema);
