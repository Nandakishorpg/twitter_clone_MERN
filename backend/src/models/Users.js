const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  
});

var users = mongoose.model("users_tb", UserSchema);
module.exports = users;

//  export const userModel=mongoose.model("users",userSchema)
