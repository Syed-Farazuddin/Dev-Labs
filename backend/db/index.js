const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/devhub")
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDB;
