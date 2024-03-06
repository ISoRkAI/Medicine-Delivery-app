const express = require("express");
const { Pharmacy } = require("../models/pharmacy");

const router = express.Router();

router.get("/", async (req, res) => {
  const pharmacy = await Pharmacy.find({});

  res.json({ pharmacy });
});

module.exports = router;
