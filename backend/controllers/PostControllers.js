const PostModel = require("../Models/Post");

const createPost = async (req, res) => {
  try {
    const { description, image } = req.body;
    userID = req.user._id;
    if (description != null || image != null) {
      const createPost = await PostModel.create({ description, userID, image });
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

const getPosts = async (req, res) => {
  try {
    // console.log("Get posts from db is requested ");
    const posts = await PostModel.find();
    if (!posts) {
      return res.json({ success: false, message: "No posts found" });
    }
    return res.json({ success: true, posts });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createPost, deletePost, getPosts };
