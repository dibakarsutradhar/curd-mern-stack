const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MenuSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  descreption: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = Menu = mongoose.model("menus", MenuSchema);
