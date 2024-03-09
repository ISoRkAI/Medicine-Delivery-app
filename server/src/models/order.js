const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: Number, required: true },
  userAddress: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  userOrder: [
    {
      nameProduct: { type: String, required: true },
      price: { type: Number, required: true },
      imgURL: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order,
};
