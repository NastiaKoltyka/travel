const countriesService = require('./countries.service');

const getAllCountries = (req, res) => {
    return countriesService.getAllCountries()
        .then(countries => {
            const result = countries.map(country => {
                const {id, name, status, countOfHotels, countOfTickets} = country;
                return {id, name, status, countOfHotels, countOfTickets};
            });

            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
};

const getAllCountriesInRange = (req, res) => {
    return countriesService.getCountriesInRange(req.params.periodStart, req.params.periodEnd)
        .then(countries => {
            const result = countries.map(country => {
                const {id, name, status, countOfHotels, countOfTickets} = country;
                return {id, name, status, countOfHotels, countOfTickets};
            });

            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getAllCountries,
    getAllCountriesInRange,
};