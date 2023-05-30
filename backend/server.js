const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const loginRouter = require("./src/routes/loginRouter");
const registerRouter = require("./src/routes/registerRouter");

app.use(express.json());
app.use(cors());

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
mongoose
  .connect(process.env.REACT_APP_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`SERVER started at PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {});
