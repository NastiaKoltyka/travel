const orderService = require('./order.service');

const placeOrder = (req, res) => {
    return orderService.placeOrder()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    placeOrder,
};