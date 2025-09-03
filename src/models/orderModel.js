
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  contactInfo: {
    phoneNumber: { type: String, required: true },
    email: { type: String },
    countryCode: { type: String, required: true }
  },
  beverages: [{
    beverageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Beverage', required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  orderNumber: { type: String, required: true, unique: true },
  status: { type: String, default: 'submitted' }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
