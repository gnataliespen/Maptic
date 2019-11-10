const User = require("../models/User");

exports.findOrCreateUser = async (req, res) => {
  const { name, email, picture } = req.user;
  //Check for existing user
  let user = await User.findOne({ email });
  //Else create user
  if (!user) {
    user = await User.create({ name, email, picture });
  }
  //Return user info
  return res.status(200).json(user);
};
