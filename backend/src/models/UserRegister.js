const mongoose = require("mongoose");

const UserRegistrationSchema = new mongoose.Schema({
  username: { type: String, required: true},
  password: { type: String, required: true },
  email: { type: String, required: true,unique:true},
  password: { type: String,required: true  },
  created_at: {type: Date,default: Date.now},
  updated_at: {type: Date,default: Date.now},
});
