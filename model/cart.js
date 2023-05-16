const mongoose = require("mongoose");

const productShecma = new mongoose.Schema({
  userId:String,
  cartItems:Object,
});

module.exports = mongoose.model("cart", productShecma)


