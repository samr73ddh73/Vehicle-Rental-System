const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Vehicle = require("../../models/Vehicle");
//test
router.get("/", (req, res) => {
  res.send("booking page is working");
});

router.post("/", (req, res) => {
  var type = req.body.type;
  var source = req.body.source_dock;

  Vehicle.find(
    { v_type: type, source_dock: source, availability: true },
    { availability: 0, _id: 0, source_dock: 0, type: 0 }
  ).then(vehicles => {
    if (!vehicles) res.status(403).send("error e");
    else res.send(vehicles);
  });
});
module.exports = router;
