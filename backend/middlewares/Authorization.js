const jwt = require("jsonwebtoken");
const UserDetailsModel = require("../Models/UserDetails");
const userModel = require("../Models/userModel");

const requireSignIn = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(202).json({
      success: false,
      message: "Authorization failed! Not authorized to access",
    });
  }
  const user = jwt.verify(token, process.env.JSON_SECRET_KEY);
  if (!user) {
    res.status(202).json({
      success: false,
      message: "Invalid Token!",
    });
  }
  req.user = user;
  const registeredUser = await userModel.findOne({ _id: user._id });
  const userDetails = await UserDetailsModel.findOne({
    email: registeredUser.email,
  });
  req.userDetails = userDetails;
  next();
};

module.exports = { requireSignIn };
