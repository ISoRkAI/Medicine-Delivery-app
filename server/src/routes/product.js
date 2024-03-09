const express = require("express");
const { Products } = require("../models/product");

const router = express.Router();

router.get("/", async (req, res) => {
  const product = await Products.find({});

  res.json({ product });
});

router.post("/", async (req, res, next) => {
  try {
    const { nameProduct, price, imgURL, pharmacyId } = req.body;

    const postProduct = await new Products({
      nameProduct,
      price,
      imgURL,
      pharmacyId,
    }).save();
    res.status(201).json({ postProduct });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
