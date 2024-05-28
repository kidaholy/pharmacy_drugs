const express = require("express");
const Med = require("../models/medModels");

const router = express.Router();

router.get("/allmed", (req, res) => {
  //console.log("in route");
  Med.find()
    .then((result) => {
      //console.log(result);
      res.send(result);
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
});

router.post("/deletemed", (req, res) => {
  const { id } = req.body;
  //console.log(id);
  Med.findByIdAndDelete(id)
    .then((result) => {
      //console.log(result);
      res.send("Deleted Successfully");
    })
    .catch((error) => {
      console.log(error);
      return res.status(404).json({ message: error });
    });
});

router.post("/addmed", (req, res) => {
  const { item } = req.body;
  const data = Med(item);
  data
    .save()
    .then((result) => {
      res.send("Saved Successfully");
    })
    .catch((error) => {
      return res.status(404).json({ message: error });
    });
});

module.exports = router;
