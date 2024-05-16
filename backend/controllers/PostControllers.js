const PostModel = require("../Models/Post");
const userModel = require("../Models/userModel");
const createPost = async (req, res) => {
  try {
    const { description, image } = req.body;
    userID = req.userDetails._id;
    userAuth = req.user._id;
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

const deletePost = async () => {
  console.log(`Delete post is requested`);
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

module.exports = { createPost, deletePost, getPosts, fetchUsers };
