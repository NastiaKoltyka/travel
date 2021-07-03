const hotelsService = require('./hotels.service');

const getAllHotels = (req, res) => {
    return hotelsService.getAllHotels(req.query.countries)
        .then(hotels => {
            const result = hotels.map(hotel => {
                const {id, country_id, hotelName, freeSeatsInHotel, city, checkIn, checkOut} = hotel;
                return {id, country_id, hotelName, freeSeatsInHotel, city, checkIn, checkOut};
            });

            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
};

const getAllHotelsInRange = (req, res) => {
    return hotelsService.getHotelsInRange(req.query.countries, req.params.periodStart, req.params.periodEnd)
    .then(hotels => {
            const result = hotels.map(hotel => {
                const {id, country_id, hotelName, freeSeatsInHotel, city, checkIn, checkOut} = hotel;
                return {id, country_id, hotelName, freeSeatsInHotel, city, checkIn, checkOut};
            });

            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getAllHotels,
    getAllHotelsInRange,
};