const mongoose = require("mongoose");

const productShecma = new mongoose.Schema({
    category:String,
    subCategory:String,
    name:String,
    price:Number,
    discount:Number,
    model:String,
    size:Number,
    color:String,
    imgUrl:[String],
    brand:String,
    description:String,
    specifications:Object
});

module.exports = mongoose.model("product", productShecma)



// const data = await products.findOne({"name":new RegExp(id,"i")} ) short and insensitive searching....