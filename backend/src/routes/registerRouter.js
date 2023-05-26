const express = require("express");
const bcrypt = require("bcryptjs");
const registerRouter = express.Router();
const register = require("../models/UserRegister");

registerRouter.post("/", function (req, res) {
 
  console.log("hi from backend");
});


module.exports=registerRouter