const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
