// backend/seeds/flightSeed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Flight = require('../models/Flight');
const connectDB = require('../config/db');

// Load environment variables
dotenv.config();

// Flight data to seed
const flightData = [
    {
        flightNumber: 'AA123',
        airline: 'American Airlines',
        departure: 'New York (JFK)',
        arrival: 'Los Angeles (LAX)',
        departureTime: new Date('2024-05-20T08:00:00Z'),
        arrivalTime: new Date('2024-05-20T11:00:00Z'),
        price: 300,
        seatsAvailable: 250
    },
    {
        flightNumber: 'DL456',
        airline: 'Delta Airlines',
        departure: 'San Francisco (SFO)',
        arrival: 'Chicago (ORD)',
        departureTime: new Date('2024-05-21T09:00:00Z'),
        arrivalTime: new Date('2024-05-21T13:00:00Z'),
        price: 350,
        seatsAvailable: 250
    },
    {
        flightNumber: 'UA789',
        airline: 'United Airlines',
        departure: 'Houston (IAH)',
        arrival: 'Miami (MIA)',
        departureTime: new Date('2024-05-22T07:00:00Z'),
        arrivalTime: new Date('2024-05-22T10:00:00Z'),
        price: 250,
        seatsAvailable: 250
    }
];

// Seed function to insert flight data
const seedFlights = async () => {
    try {
        await connectDB();
        await Flight.deleteMany(); // Clear existing data
        await Flight.insertMany(flightData); // Insert new data
        console.log('Flight data seeded successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding flight data:', err);
        process.exit(1); // Exit with failure
    }
};

seedFlights();

// command to run this
// node seeds/flightSeed.js