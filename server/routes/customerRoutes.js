const express = require('express')
const customerRouter  = express.Router();

const CustomerController = require('../controllers/customerController');

customerRouter.post('/registerCustomer', CustomerController.registerCustomer);
customerRouter.post('/deleteCustomer', CustomerController.deleteCustomer);

module.exports = customerRouter;