const Router = require('express').Router;

const countries = require('./countries.route');
const hotels = require('./hotels.route');
const tickets = require('./tickets.route');
const order = require('./order.route');

module.exports = () => {
    const routing = Router();

    routing.use('/countries', countries());
    routing.use('/hotels', hotels());
    routing.use('/tickets', tickets());
    routing.use('/order', order());

    return routing;
}