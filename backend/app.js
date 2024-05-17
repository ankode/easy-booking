const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require('./config/db');

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));


// Connect to MongoDB and start the server
const startServer = async () => {
    try {
        await connectDB();
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App is listening on PORT ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to the database', err);
    }
};

// start the server
startServer();

// route
app.get("/", (req, res) => {
    res.status(201).json({
        message: "sending message from backend from mount",
        messageAnkush: "this is ankush message from mount"
    });
});

app.get("/ankush", (req, res) => {
    res.status(201).json({ message: "this is ankush" });
});

// Define routes for handling flight-related API endpoints
app.use('/api/flights', require('./routes/flights'));

// Define routes for handling train-related API endpoints
app.use('/api/trains', require('./routes/trains'));

// Define routes for handling train-related API endpoints
app.use('/api/movies', require('./routes/movies'));