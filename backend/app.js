const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const loginRouter = require("./src/routes/loginRouter");
const registerRouter = require('./src/routes/registerRouter')

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/socialmedia?retryWrites=true&w=majority"
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(2000, () => {
  console.log("SERVER STARTED at port 2000");
});
