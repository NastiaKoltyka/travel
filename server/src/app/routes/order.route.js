const express = require('express');
const route = express.Router();

const orderController = require('../components/order/order.controller');

module.exports = () => {
    route.post('/', orderController.placeOrder);

    return route;
}