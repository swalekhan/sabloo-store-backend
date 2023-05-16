
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://swalekhan:swalekhan.6633@cluster0.wbzrty2.mongodb.net/ecommerce")


const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

db.on('disconnected', () => {
  console.log('MongoDB connection disconnected.');
});
