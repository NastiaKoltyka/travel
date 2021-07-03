const express = require('express');
const route = express.Router();

const hotelsController = require('../components/hotels/hotels.controller');

module.exports = () => {
    route.get('/', hotelsController.getAllHotels);
    route.get('/:periodStart/:periodEnd', hotelsController.getAllHotelsInRange);

    return route;
}