const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");

//DB connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/korpen-app")
  .then(() => console.log("DB conected"));

//Model
const UserSchema = require("./models/user.model");

app.use(cors());
app.use(express.json());

//Get the POST data from frontend
app.post("/register", async (req, res) => {
  console.log(req.body);
  const { userName, email, password } = req.body;
  const saltRounds = 10;
  // crypytering av password with bcrypt
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    await UserSchema.create({ userName, email, password: hashedPassword });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

//Get the POST data from frontend
app.post("/login", async (req, res) => {
  console.log(req.body);

  const user = await UserSchema.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
});

app.listen(5005, () => {
  console.log("server started on 5005");
});
