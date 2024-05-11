const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");
// const userDetails = require("../Models/UserDetails");
const UserDetailsModel = require("../Models/UserDetails");
const json = require("jsonwebtoken");
require("dotenv").config();

const registerController = async (req, res) => {
  const { email, password, userName } = req.body;
  console.log(email, password, userName);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    email,
    password: hashedPassword,
    userName,
  });
  const userDetails = await UserDetailsModel.create({ email: email });
  if (user) {
    return res.send({
      success: true,
      message: "Successfully got data from client",
    });
  }
  res.send({
    success: false,
    message: "Successfully got data from client",
  });
};

const getCodingProfiles = async (req, res) => {
  const codingProfiles = await UserDetailsModel.create(req.body);
  if (!codingProfiles) {
    return res
      .status(201)
      .send({ message: "Something went wrong", success: false });
  }
  res.status(200).send({ success: true, codingProfiles });
};

const loginController = async (req, res) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { name, password } = req.body;
  let user;
  if (emailRegex.test(name)) {
    user = await userModel.findOne({ email: name });
  } else {
    user = await userModel.findOne({ userName: name });
  }
  if (!user) {
    return res.send({ message: "No user Found", success: false });
  }
  const hashedpassword = user.password;
  const matchpass = await bcrypt.compare(password, hashedpassword);
  if (matchpass) {
    const token = await json.sign(
      { _id: user._id },
      process.env.JSON_SECRET_KEY,
      { expiresIn: "7d" }
    );
    return res.send({
      success: true,
      user: {
        name: user.userName,
        email: user.email,
        id: user._id,
      },
      token,
    });
  }
  return res.send({ message: "Invalid password", success: false });
};

const findMail = async (req, res) => {
  const { email } = req.body;
  const emailCheck = await userModel.find({ email });
  if (emailCheck.length > 0) {
    return res.send({ success: true, emailCheck });
  }
  res.send({ success: false });
};

const findUserName = async (req, res) => {
  const { userName } = req.body;
  const userCheck = await userModel.find({ userName });
  if (userCheck.length > 0) {
    return res.send({ success: true, userCheck });
  }
  res.send({ success: false });
};

module.exports = {
  getCodingProfiles,
  registerController,
  findMail,
  findUserName,
  loginController,
};
