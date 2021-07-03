const Router = require('express').Router;

const countries = require('./countries.route');
const hotels = require('./hotels.route');
const tickets = require('./tickets.route');

module.exports = () => {
    const routing = Router();

    routing.use('/countries', countries());
    routing.use('/hotels', hotels());
    routing.use('/tickets', tickets());

    return routing;
}