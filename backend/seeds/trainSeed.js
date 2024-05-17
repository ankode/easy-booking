// backend/seeds/flightSeed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Train = require('../models/Train');
const connectDB = require('../config/db');

// Load environment variables
dotenv.config();

// Flight data to seed
const trainData = [
    {
        trainNumber: 17231,
        departure: 'New York (JFK)',
        arrival: 'Los Angeles (LAX)',
        departureTime: new Date('2024-05-20T08:00:00Z'),
        arrivalTime: new Date('2024-05-20T11:00:00Z'),
        class: '3A',
        price: 300,
        seatsAvailable: 250
    },
    {
        trainNumber: 12345,
        departure: 'San Francisco (SFO)',
        arrival: 'Chicago (ORD)',
        departureTime: new Date('2024-05-21T09:00:00Z'),
        arrivalTime: new Date('2024-05-21T13:00:00Z'),
        class: '2A',
        price: 350,
        seatsAvailable: 250
    },
    {
        trainNumber: 12453,
        departure: 'Houston (IAH)',
        arrival: 'Miami (MIA)',
        departureTime: new Date('2024-05-22T07:00:00Z'),
        arrivalTime: new Date('2024-05-22T10:00:00Z'),
        class: '1A',
        price: 250,
        seatsAvailable: 250
    }
];

// Seed function to insert flight data
const seedTrains = async () => {
    try {
        await connectDB();
        await Train.deleteMany(); // Clear existing data
        await Train.insertMany(trainData); // Insert new data
        console.log('Train data seeded successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding train data:', err);
        process.exit(1); // Exit with failure
    }
};

seedTrains();

// command to run this
// node seeds/trainSeed.js