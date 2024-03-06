const port = 3000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pharmacyRouter = require("./src/routes/pharmacy");
const orderRouter = require("./src/routes/order");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/pharmacy", pharmacyRouter);
app.use("/order", orderRouter);

mongoose.connect(
  "mongodb+srv://MedicineDeliveryApp:MedicineDeliveryApp@cluster0.gom3h95.mongodb.net/Medicine"
);

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server started on Port" + port);
    return;
  }
  console.log("Error" + error);
});
