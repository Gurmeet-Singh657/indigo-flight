import React, { useState, useEffect } from 'react';
import FlightCard from '../../components/FlightCard/FlightCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography, Box } from "@mui/material";
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

const AdminPage = () => {
    const [flights, setFlights] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
        } else {
            console.error("Token Not Found");
        }
    }, []);

    console.log(token);

    useEffect(() => {
        const fetchFlights = async () => {
            if (token) {
                const response = await axios.get("http://localhost:8081/flights", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                setFlights(response.data);
            }
        }
        fetchFlights()
    }, [token]);

    const handleUpdateStatus = (id, newStatus) => {
        setFlights(flights.map(flight => flight.id === id ? { ...flight, status: newStatus } : flight));
    };

    return (
        <>
            <Navbar />
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{
                            color: "#333",
                            fontWeight: "bold",
                            margin: '20px',
                            fontFamily: '"Mukta", sans-serif'
                        }}
                    >
                        Flight List
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {flights.map((flight) => (
                        <Grid item xs={12} sm={6} md={4} key={flight.id}>
                            <FlightCard flight={flight} onUpdateStatus={handleUpdateStatus} isAdmin={true} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default AdminPage;
