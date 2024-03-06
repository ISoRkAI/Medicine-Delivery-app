const express = require("express");
const { Order } = require("../models/order");

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find({});

  res.json({ orders });
});

router.post("/", async (req, res, next) => {
  try {
    const { userName, userEmail, userPhone, userAddress, userOrder } = req.body;

    const postOrders = await new Order({
      userName,
      userEmail,
      userPhone,
      userAddress,
      userOrder,
    }).save();
    res.status(201).json({ postOrders });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
