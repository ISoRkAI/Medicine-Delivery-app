const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  nameProduct: { type: String },
  price: { type: Number },
  imgURL: { type: String },
  pharmacyId: { type: Number },
});

const Products = mongoose.model("products", productsSchema);

module.exports = {
  Products,
};
