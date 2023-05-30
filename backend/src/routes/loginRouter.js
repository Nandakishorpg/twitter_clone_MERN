const express = require("express");
const loginRouter = express.Router();
const user = require("../models/Users");

loginRouter.post("/", (req, res) => {
  console.log(req.body.user);
  const error = 401;
  // res.send('Hellooo, world!');
  const userName = req.body.user;
  console.log(userName);

  user
    .find({ username: userName })
    .then((data) => {
      if (data.length > 0) {
        return res.status(200).json({
          success: true,
          error: false,
          data: data,
          message: "user found",
        });
      } else {
        return res.status(200).json({
          success: false,
          error: true,
          data: [],
          message: "No Account found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: true,
        data: err,
        message: "an error occured",
      });
    });
});

module.exports = loginRouter;

/* 
  user.find({ username: userName }).then((data) => {
    return res.status(200).json({
        success: true,
        error: false,
        data: data
    }).catch((err)=>{
     return res.status(401).json({
        success: false,
        error: true,
        data: err,
        message: "No Account found",
    })
  })

  if (!userData) {
    res.status(401).json({
      success: false,
      error: true,
      data: err,
      message: "No Account found",
    });
  } else {
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
        res.status(401).json({
          success: false,
          error: true,
          data: err,
          message: err,
        });
      });
  }
});
 */
