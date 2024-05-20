const Flight = require('../models/Flight');

exports.getFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFlight = async (req, res) => {
    const flight = new Flight(req.body);
    try {
        const newFlight = await flight.save();
        res.status(201).json(newFlight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
