const express = require("express");

const router = express.Router();

const User = require("../models/userModels");

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const newUser = User({
    username: username,
    email: email,
    password: password,
    isAdmin: false,
  });
  newUser
    .save()
    .then((result) => {
      res.send("Registered successfully");
    })
    .catch((error) => {
      return res.status(404).json({ message: error });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.find({ email, password })
    .then((result) => {
      const user = {
        username: result[0].username,
        email: result[0].email,
        isAdmin: result[0].isAdmin,
        _id: result[0]._id,
      };
      res.send(user);
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
});

router.get("/alluser", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
});

module.exports = router;
