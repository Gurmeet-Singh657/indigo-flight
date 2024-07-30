import React from 'react';
import { Box, Typography, Link, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom className={styles.title}>
              AirWave
            </Typography>
            <Typography variant="body2" className={styles.text}>
              © 2024 AirWave. All rights reserved.
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" className={styles.iconButton}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" className={styles.iconButton}>
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" className={styles.iconButton}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom className={styles.title}>
              Quick Links
            </Typography>
            <Link href="/" underline="hover" className={styles.link}>
              Home
            </Link>
            <Link href="/admin" underline="hover" className={styles.link}>
              Admin Dashboard
            </Link>
            <Link href="/my-flights" underline="hover" className={styles.link}>
              My Flights
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Contact
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Get Started
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
