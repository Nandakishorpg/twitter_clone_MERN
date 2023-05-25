const express = require("express");
const loginRouter = express.Router();
const user = require("../models/Users");

loginRouter.post("/", function (req, res) {
  console.log(req.body.user);
  // res.send('Hellooo, world!');
  let userData = {
    username: req.body.user
  };
  let user_item = user(userData);

  user_item
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
        error: false,
        message: "registration completed",
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        error: true,
        data: err,
        message: "No Account found",
      });
    });
});

module.exports = loginRouter;
