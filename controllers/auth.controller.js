const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    message: "user created",
    data: {
      user: newUser,
    },
  });
});
