const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
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

const {
  createPost,
  getPosts,
  fetchUsers,
  updateLikes,
} = require("./controllers/PostControllers.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
    console.log(file);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now, path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.get("/getUsers", requireSignIn, fetchUsers);

app.get("/getPosts", requireSignIn, getPosts);

app.post("/login", loginController);

app.post("/register", registerController);

app.post("/CheckEmail", findMail);

app.post("/codingProfiles", getCodingProfiles);

app.post("/checkUserName", findUserName);

app.post("/createPost", requireSignIn, createPost);

app.post("/updateLikes", requireSignIn, updateLikes);

app.post("/uploadImage", upload.single("image"), (req, res) => {
  res.json({ message: "Image uploaded successfully" });
});

app.put("/updateProfile", requireSignIn, updateProfile);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
