const Countries = require('../shared/models/countries');
const Hotels = require('../shared/models/hotels');
const Tickets = require('../shared/models/tickets');

const getAllCountries = () => {
    return Countries.getAll().then(countries =>
        Promise.all(countries.map(country => Hotels.getAll(country.id).then(hotels => {
            country.countOfHotels = hotels.length;
            return country;
        }))).then(countries =>
            Promise.all(countries.map(country => Tickets.getAll(country.id).then(tickets => {
                country.countOfTickets = tickets.length;
                return country;
            })))
        ));
};

const getCountriesInRange = (periodStart, periodEnd) => {
    return Countries.getAll().then(countries =>
        Promise.all(countries.map(country => Hotels.getInPeriod(country.id, periodStart, periodEnd).then(hotels => {
            country.countOfHotels = hotels.length;
            return country;
        }))).then(countries =>
            Promise.all(countries.map(country => Tickets.getInPeriod(country.id, periodStart, periodEnd).then(tickets => {
                country.countOfTickets = tickets.length;
                return country;
            })))
        ));
};

module.exports = {
    getAllCountries,
    getCountriesInRange
};