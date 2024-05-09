const PostModel = require("../Models/Post");

const createPost = async () => {
  const postDetails = req.body;
  console.log(postDetails);
  //   PostModel.create(req.body);
  if (postDetails) {
    res.json({
      message: "Got details",
      success: true,
      postDetails,
    });
  }
};

const deletePost = async () => {
  console.log(`Delete post is requested`);
};

module.exports = { createPost, deletePost };
