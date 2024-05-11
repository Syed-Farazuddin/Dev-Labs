const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

const {
  getCodingProfiles,
  registerController,
  findMail,
  findUserName,
  loginController,
} = require("./controllers/AuthControllers.js");

const { requireSignIn } = require("./middlewares/Authorization.js");
const { updateProfile } = require("./controllers/ProfileController.js");

const { createPost, getPosts } = require("./controllers/PostControllers.js");

app.use(cors());
app.use(express.json());

connectDB();

app.post("/login", loginController);

app.post("/register", registerController);

app.post("/CheckEmail", findMail);

app.post("/codingProfiles", getCodingProfiles);

app.post("/checkUserName", findUserName);

app.put("/updateProfile", requireSignIn, updateProfile);

app.post("/createPost", requireSignIn, createPost);

app.get("/getPosts", requireSignIn, getPosts);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
