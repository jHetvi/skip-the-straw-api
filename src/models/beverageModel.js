
const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  name: String,
  price: Number
}, { _id: false });

const nutritionalInfoSchema = new mongoose.Schema({
  calories: Number,
  sugar: String,
  carbs: String
}, { _id: false });

const beverageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  category: String,
  popular: Boolean,
  ecoFriendly: Boolean,
  available: Boolean,
  sizes: [sizeSchema],
  ingredients: [String],
  nutritionalInfo: nutritionalInfoSchema
}, { timestamps: true });

const Beverage = mongoose.model('Beverage', beverageSchema);

module.exports = Beverage;
