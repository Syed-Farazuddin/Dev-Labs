const mongoose = require("mongoose");

const userDetails = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  userAuth: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

const UserDetailsModel = mongoose.model("userDetails", userDetails);

module.exports = UserDetailsModel;
