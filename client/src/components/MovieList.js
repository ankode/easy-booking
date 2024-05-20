import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightList = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/flights');
                setFlights(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchFlights();
    }, []);

    return (
        <div>
            <h1>Available Flights</h1>
            <ul>
                {flights.map((flight) => (
                    <li key={flight._id}>
                        {flight.flightNumber} - {flight.departure} to {flight.arrival} - ${flight.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightList;
