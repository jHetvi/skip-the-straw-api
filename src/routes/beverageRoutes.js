const express = require('express');
const router = express.Router();
const beverageController = require('../controllers/beverageController');

router.get('/', beverageController.getAllBeverages);
router.get('/:id', beverageController.getBeverageById);
router.post('/', beverageController.createBeverage);
router.put('/:id', beverageController.updateBeverage);
router.delete('/:id', beverageController.deleteBeverage);

module.exports = router;
