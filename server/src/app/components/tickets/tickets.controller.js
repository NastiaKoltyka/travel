const ticketsService = require('./tickets.service');

const getAllTickets = (req, res) => {
    return ticketsService.getAllTickets(req.query.countries)
        .then(tickets => {
            const result = tickets.map(ticket => {
                const {id, country_id, airline, freeSeats, date} = ticket;
                return {id, country_id, airline, freeSeats, date};
            });

            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
};

const getAllTicketsInRange = (req, res) => {
    return ticketsService.getTicketsInRange(req.query.countries, req.params.periodStart, req.params.periodEnd)
        .then(tickets => {
            const result = tickets.map(ticket => {
                const {id, country_id, airline, freeSeats, date} = ticket;
                return {id, country_id, airline, freeSeats, date};
            });

            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getAllTickets,
    getAllTicketsInRange,
};