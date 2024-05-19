const PostModel = require("../Models/Post");
const userModel = require("../Models/userModel");
const createPost = async (req, res) => {
  try {
    const { description, image } = req.body;
    console.log(req.user);
    userID = req.userDetails._id;
    userAuth = req.user._id;
    console.log(userID, userAuth);
    if (description != null || image != null) {
      const createPost = await PostModel.create({
        description,
        userID,
        image,
        userAuth,
      });
      res.json({
        message: "Got details",
        success: true,
        createPost,
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      error: e,
    });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.body;
  // console.log(id);
  const deletedPost = await PostModel.findByIdAndDelete(id);
  // console.log(x);
  if (!deletedPost) {
    return res.json({
      success: false,
      message: "Post not found",
    });
  }
  return res.json({
    success: true,
    message: "Post deleted successfully",
  });
};

const fetchUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    console.log(users);
    res.json({ success: true, Message: "Users found", users });
    if (users) {
    }
  } catch (e) {
    console.log(e);
  }
};

const updateLikes = async (req, res) => {
  const post = req.body.postDetails;
  const userID = req.body.userID;
  if (post?.likedBy?.indexOf(userID) === -1) {
    const updatedArr = [...post?.likedBy, userID];
    const increasedLikes = post.likes + 1;
    PostModel.updateOne(
      { _id: post._id },
      { $set: { likedBy: updatedArr, likes: increasedLikes } }
    )
      .then(() => {
        res.json({ success: true, post });
      })
      .catch((e) => console.log(e));
  } else {
    const updatedArr = post.likedBy.filter((item) => {
      return item !== userID;
    });
    const decreaseLikes = post.likes - 1;
    PostModel.updateOne(
      { _id: post._id },
      { $set: { likedBy: updatedArr, likes: decreaseLikes } }
    )
      .then(() => {
        res.json({ success: true, post });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  res.json({ message: "Updated post details", post });
};

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate("userID")
      .populate("userAuth")
      .sort("-createdAt");
    // populate({
    // path: "userID",
    // select: ["name", "bio", "image_URL"],
    // });
    if (!posts) {
      return res.json({ success: false, message: "No posts found" });
    }
    return res.json({ success: true, posts });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createPost, deletePost, getPosts, fetchUsers, updateLikes };
