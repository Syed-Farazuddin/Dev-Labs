const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
      likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    comments: {
      type: Number,
      default: 0,
      CommentedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    shares: {
      type: Number,
      default: 0,
    },
    bookmarks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
