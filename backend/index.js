const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const userModel = require("./Models/UserAuth.js");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await userModel.create(req.body);
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
  // console.log(email);
  const emailCheck = await userModel.find({ email });
  if (emailCheck.length > 0) {
    return res.send({ success: true, emailCheck });
  }
  res.send({ success: false });
});

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
