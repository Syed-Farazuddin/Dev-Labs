const getProfile = (req, res) => {};

const updateProfile = (req, res) => {
  const user = req.header;
  user.name = req.name || user.name;
  user.bio = req.bio || user.bio;
  user.github = req.github || user.github;
  user.leetcode = req.leetcode || user.leetcode;
  user.website = req.website || user.website;
};

module.exports = { getProfile };
