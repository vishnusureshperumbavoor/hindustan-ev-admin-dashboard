const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },
  chassisNumber: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  productionDate: {
    type: Date,
    required: true,
  },
  inventoryImage: {
    type: String,
    required: true,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;