const express = require("express");
const loginRouter = express.Router();

loginRouter.post("/", function (req, res) {

 console.log(req.body.user)
  // res.send('Hellooo, world!');

});

module.exports = loginRouter;
