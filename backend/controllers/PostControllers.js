const PostModel = require("../Models/Post");

const createPost = async (req, res) => {
  const postDetails = req.body;
  if (postDetails) {
    const createPost = await PostModel.create(postDetails);
    res.json({
      message: "Got details",
      success: true,
      createPost,
    });
  }
};

const deletePost = async () => {
  console.log(`Delete post is requested`);
};

module.exports = { createPost, deletePost };
