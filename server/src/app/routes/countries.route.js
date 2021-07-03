const express = require('express');
const route = express.Router();

const countriesController = require('../components/countries/countries.controller');

module.exports = () => {
    route.get('/', countriesController.getAllCountries);
    route.get('/:periodStart/:periodEnd', countriesController.getAllCountriesInRange);

    return route;
}