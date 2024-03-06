const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  namePharmacy: { type: String, required: true },
  product: {
    nameProduct: { type: String, required: true },
    price: { type: Number, required: true },
    imgURL: { type: String, required: true },
  },
});

const Pharmacy = mongoose.model("pharmacies", pharmacySchema);

module.exports = {
  Pharmacy,
};
