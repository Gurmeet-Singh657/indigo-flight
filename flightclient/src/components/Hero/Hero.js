import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Box className={styles.hero}>
      <Typography
        variant="h2"
        gutterBottom
        className={styles.title}
      >
        Fly High with AirWave
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        className={styles.subtitle}
      >
        Experience seamless, real-time flight updates and notifications
      </Typography>
      <Button
        className={styles.button}
        size="large"
        sx={{backgroundColor: "#0066ff", color : 'white'}}
      >
        Start Your Journey
      </Button>
    </Box>
  );
};

export default Hero;
