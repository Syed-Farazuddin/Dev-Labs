const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const userModel = require("./Models/UserAuth.js");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.post("/register", async (req, res) => {
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
});

app.post("/CheckEmail", async (req, res) => {
  const { email } = req.body;
  const emailCheck = await userModel.find({ email });
  if (emailCheck.length > 0) {
    return res.send({ success: true, emailCheck });
  }
  res.send({ success: false });
});

app.post("/checkUserName", async (req, res) => {
  const { userName } = req.body;
  const userCheck = await userModel.find({ userName });
  if (userCheck.length > 0) {
    return res.send({ success: true, userCheck });
  }
  res.send({ success: false });
});

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
