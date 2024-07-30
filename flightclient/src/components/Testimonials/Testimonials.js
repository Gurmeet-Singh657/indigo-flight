import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Alice Brown', feedback: 'AirWave is a game changer for managing my travel plans.' },
    { name: 'David Wilson', feedback: 'The user interface is so intuitive and the real-time notifications are a lifesaver.' },
    { name: 'Samantha Lee', feedback: 'I never miss a flight update with this app. Highly recommended!' },
  ];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Box className={styles.container}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          className={styles.title}
        >
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box className={styles.testimonialCard}>
                <Avatar
                  sx={{
                    bgcolor: getRandomColor(),
                  }}
                  className={styles.avatar}
                >
                  {testimonial.name.charAt(0)}
                </Avatar>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={styles.name}
                >
                  {testimonial.name}
                </Typography>
                <Typography>{testimonial.feedback}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
