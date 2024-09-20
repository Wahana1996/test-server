const { User } = require("../models");

exports.createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName && !lastName && !email) {
    return res.status(400).json({ message: "failid" });
  }
  const users = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  return res.status(200).json({
    message: "success",
    data: users,
  });
};
