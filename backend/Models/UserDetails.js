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
  github: {
    userName: {
      type: String,
    },
    website_link: {
      type: String,
    },
  },
  leetcode: {
    userName: {
      type: String,
    },
    website_link: {
      type: String,
    },
  },
  codeforces: {
    userName: {
      type: String,
    },
    website_link: {
      type: String,
    },
  },
});

const UserDetailsModel = mongoose.model("userDetailsSchema", userDetails);

module.exports = UserDetailsModel;
