const mongoose = require("mongoose");

const productShecma = new mongoose.Schema({
  userId:String,
  cartItems:Array,
});

module.exports = mongoose.model("cart", productShecma)



