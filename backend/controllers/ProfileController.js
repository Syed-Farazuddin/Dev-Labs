const UserDetailsModel = require("../Models/UserDetails");
const userModel = require("../Models/UserAuth");
const getProfile = (req, res) => {};

const updateProfile = async (req, res) => {
  let user = await userModel.findOne({ _id: req.user._id });
  const header = req.user;
  const body = req.body;
  return res.status(200).json({
    success: true,
    message: "User details updated successfully",
    user,
    body,
    header,
  });
};

module.exports = { getProfile, updateProfile };
