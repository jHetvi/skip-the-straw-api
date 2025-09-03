const Order = require('../models/orderModel');
const Beverage = require('../models/beverageModel');

exports.createOrder = async (req, res, next) => {
  try {
    const { customerName, contactInfo, beverages, total } = req.body;

    if (!customerName || !contactInfo || !Array.isArray(beverages) || beverages.length === 0 || total === undefined) {
      return res.status(400).json({
        status: 'fail',
        message: 'Missing required order fields'
      });
    }

    const orderNumber = generateOrderNumber();
    const order = await Order.create({
      customerName,
      contactInfo,
      beverages,
      total,
      orderNumber
    });
    res.status(201).json({
      status: 'success',
      data: {
        orderId: order._id,
        orderNumber: order.orderNumber,
        customerName: order.customerName,
        contactInfo: order.contactInfo,
        beverages: order.beverages,
        total: order.total,
      }
    });
  } catch (error) {
    next(error);
  }
};

function generateOrderNumber() {
  const prefix = 'ORD';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}-${random}`;
}
