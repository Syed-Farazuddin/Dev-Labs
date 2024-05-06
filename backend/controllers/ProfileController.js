const UserDetailsModel = require("../Models/UserDetails");
const userModel = require("../Models/UserAuth");
const getProfile = (req, res) => {};

const updateProfile = async (req, res) => {
  let user = await userModel.findOne({ _id: req.user._id });
  const header = req.user;
  const body = req.body;
  const {
    name,
    bio,
    image_URL,
    working_at,
    email,
    mobile,
    website,
    github,
    leetcode,
    codeforces,
  } = req.body;
  // console.log(name);
  const userDetails = req.userDetails;
  userDetails.details.name = name || userDetails.details.name;
  userDetails.details.bio = bio || userDetails.details.bio;
  userDetails.details.image_URL = image_URL || userDetails.details.image_URL;
  userDetails.details.working_at = working_at || userDetails.details.working_at;
  userDetails.contact.email = email || userDetails.contact.email;
  userDetails.contact.mobile = mobile || userDetails.contact.mobile;
  userDetails.contact.website = website || userDetails.contact.email;
  userDetails.github.userName = github || userDetails.github.userName;
  userDetails.leetcode.userName = leetcode || userDetails.leetcode.userName;
  userDetails.codeforces.userName =
    codeforces || userDetails.codeforces.userName;
  await userDetails.save();
  return res.status(200).json({
    success: true,
    message: "User details updated successfully",
    user,
    userDetails,
  });
};

module.exports = { getProfile, updateProfile };
