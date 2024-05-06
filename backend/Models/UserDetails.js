const mongoose = require("mongoose");

const userDetails = mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  details: {
    name: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    image_URL: {
      type: String,
      default: "",
    },
    working_at: {
      type: String,
      default: "",
    },
  },
  contact: {
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    website: {
      type: String,
    },
  },
  github: {
    userName: {
      type: String,
    },
  },
  leetcode: {
    userName: {
      type: String,
    },
  },
  codeforces: {
    userName: {
      type: String,
    },
  },
});

const UserDetailsModel = mongoose.model("userDetailsSchema", userDetails);

module.exports = UserDetailsModel;
