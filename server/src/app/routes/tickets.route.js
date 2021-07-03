const express = require('express');
const route = express.Router();

const ticketsController = require('../components/tickets/tickets.controller');

module.exports = () => {
    route.get('/', ticketsController.getAllTickets);
    route.get('/:periodStart/:periodEnd', ticketsController.getAllTicketsInRange);

    return route;
}