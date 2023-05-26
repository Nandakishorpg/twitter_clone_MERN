const express = require("express");
const loginRouter = express.Router();
const user = require("../models/Users");

loginRouter.post("/", function (req, res) {
  console.log(req.body.user);
  // res.send('Hellooo, world!');
const  userName=req.body.user
    
  
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

  // if (!userData) {
    // res.status(401).json({
    //   success: false,
    //   error: true,
    //   data: err,
    //   message: "No Account found",
  //   });
  // } else {
  //   let user_item = user(userData);
  //   user_item
  //     .save()
  //     .then(() => {
  //       res.status(200).json({
  //         success: true,
  //         error: false,
  //         message: "registration completed",
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(401).json({
  //         success: false,
  //         error: true,
  //         data: err,
  //         message: err,
  //       });
  //     });
  // }
});

module.exports = loginRouter;
