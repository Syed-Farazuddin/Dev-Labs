const jwt = require("jsonwebtoken");

const requireSignIn = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(202).json({
      success: false,
      message: "Authorization failed! Not authorized to access",
    });
  }
  const user = jwt.verify(token, process.env.JSON_SECRET_KEY);
  console.log(user);
  if (!user) {
    res.status(202).json({
      success: false,
      message: "Invalid Token!",
    });
  }
  req.user = user;
  next();
};

module.exports = { requireSignIn };
