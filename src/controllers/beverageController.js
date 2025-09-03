const Beverage = require('../models/beverageModel');

exports.getAllBeverages = async (req, res, next) => {
  try {
    const beverages = await Beverage.find();
    res.status(200).json({
      status: 'success',
      results: beverages.length,
      data: { beverages }
    });
  } catch (error) {
    next(error);
  }
};

exports.getBeverageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const beverage = await Beverage.findById(id);
    if (!beverage) {
      return res.status(404).json({
        status: 'fail',
        message: `Beverage with ID ${id} not found`
      });
    }
    res.status(200).json({
      status: 'success',
      data: { beverage }
    });
  } catch (error) {
    next(error);
  }
};

exports.createBeverage = async (req, res, next) => {
  try {
    const newBeverage = req.body;
    const beverage = await Beverage.create(newBeverage);
    res.status(201).json({
      status: 'success',
      data: { beverage }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBeverage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBeverage = req.body;
    const beverage = await Beverage.findByIdAndUpdate(id, updatedBeverage, { new: true });
    if (!beverage) {
      return res.status(404).json({
        status: 'fail',
        message: `Beverage with ID ${id} not found`
      });
    }
    res.status(200).json({
      status: 'success',
      data: { beverage }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBeverage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const beverage = await Beverage.findByIdAndDelete(id);
    if (!beverage) {
      return res.status(404).json({
        status: 'fail',
        message: `Beverage with ID ${id} not found`
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    next(error);
  }
};
