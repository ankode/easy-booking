const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainNumber: { type: Number, required: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    class: {type: String, required: true},
    price: { type: Number, required: true },
    seatsAvailable: { type: Number, required: true },
});
module.exports = mongoose.model('Train', trainSchema);