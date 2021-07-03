const Countries = require('../shared/models/countries');
const Hotels = require('../shared/models/hotels');
const Tickets = require('../shared/models/tickets');

const getAllTickets = (countries) => {
    var ticketPromises = countries.map(countryId => {
        return Tickets.getAll(countryId);
    });

    return Promise.all(ticketPromises).then(countriesTickets => {
        var result = [];
        countriesTickets.forEach(countryTickets => {
            result = result.concat(countryTickets);
        });
        return result;
    });
};

const getTicketsInRange = (countries, periodStart, periodEnd) => {
    var ticketPromises = countries.map(countryId => {
        return Tickets.getInPeriod(countryId, periodStart, periodEnd);
    });

    return Promise.all(ticketPromises).then(countriesTickets => {
        var result = [];
        countriesTickets.forEach(countryTickets => {
            result = result.concat(countryTickets);
        });
        return result;
    });
};

module.exports = {
    getAllTickets,
    getTicketsInRange
};