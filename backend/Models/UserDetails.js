const mongoose = require("mongoose");

const userDetails = mongoose.Schema({
  userDetails: {
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    image_URL: {
      type: String,
    },
    working_at: {
      type: String,
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
  },
  website: {
    url: {
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
