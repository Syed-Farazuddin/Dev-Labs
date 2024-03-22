const bcrypt = require("bcrypt");
const userModel = require("../Models/UserAuth");

const registerController = async (req, res) => {
  const { email, password, userName } = req.body;
  console.log(email, password, userName);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    email,
    password: hashedPassword,
    userName,
  });
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

module.exports = { registerController, findMail, findUserName };
