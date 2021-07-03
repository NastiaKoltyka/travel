const Countries = require('../shared/models/countries');
const Hotels = require('../shared/models/hotels');
const Tickets = require('../shared/models/tickets');

const getAllHotels = (countries) => {
    var hotelPromises = countries.map(countryId => {
        return Hotels.getAll(countryId);
    });

    return Promise.all(hotelPromises).then(countriesHotels => {
        var result = [];
        countriesHotels.forEach(countryHotels => {
            result = result.concat(countryHotels);
        });
        return result;
    });
};

const getHotelsInRange = (countries, periodStart, periodEnd) => {
    var hotelPromises = countries.map(countryId => {
        return Hotels.getInPeriod(countryId, periodStart, periodEnd);
    });

    return Promise.all(hotelPromises).then(countriesHotels => {
        var result = [];
        countriesHotels.forEach(countryHotels => {
            result = result.concat(countryHotels);
        });
        return result;
    });
};

module.exports = {
    getAllHotels,
    getHotelsInRange
};