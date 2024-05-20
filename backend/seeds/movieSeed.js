// backend/seeds/flightSeed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movie = require('../models/Movie');
const connectDB = require('../config/db');

// Load environment variables
dotenv.config();

// Flight data to seed
const movieData = [
    {
        hallName: "Cinema Hall 1",
        movieName: "Avengers: Endgame",
        location: "MG Road",
        startTime: new Date("2024-06-01T14:30:00Z"),
        endTime: new Date("2024-06-01T17:30:00Z"),
        price: 15.00,
        seatsAvailable: 50
    },
    
    {
        hallName: "Grand Theater",
        movieName: "Inception",
        location: "HSR",
        startTime: new Date("2024-06-01T19:00:00Z"),
        endTime: new Date("2024-06-01T21:30:00Z"),
        price: 12.50,
        seatsAvailable: 100
    },

    {
        hallName: "IMAX Screen",
        movieName: "Interstellar",
        location: "Whitefield",
        startTime: new Date("2024-06-01T16:00:00Z"),
        endTime: new Date("2024-06-01T19:00:00Z"),
        price: 20.00,
        seatsAvailable: 75
    }
];

// Seed function to insert flight data
const seedMovies = async () => {
    try {
        await connectDB();
        await Movie.deleteMany(); // Clear existing data
        await Movie.insertMany(movieData); // Insert new data
        console.log('Movie data seeded successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding movie data:', err);
        process.exit(1); // Exit with failure
    }
};

seedMovies();

// command to run this
// node seeds/flightSeed.js