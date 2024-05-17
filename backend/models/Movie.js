const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    hallName: { type: String, required: true },
    movieName: { type: String, required: true },
    location: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    price: { type: Number, required: true },
    seatsAvailable: { type: Number, required: true },
});
module.exports = mongoose.model('Movie', movieSchema);