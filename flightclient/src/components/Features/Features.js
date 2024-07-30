import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import styles from "./Features.module.css";

const Features = () => {
  const features = [
    {
      icon: <AccessTimeIcon className={styles.featureIcon} />,
      title: "Real-Time Updates",
      description: "Get instant updates on flight status.",
    },
    {
      icon: <NotificationsActiveIcon className={styles.featureIcon} />,
      title: "Notifications",
      description: "Receive timely notifications about your flight.",
    },
    {
      icon: <FlightTakeoffIcon className={styles.featureIcon} />,
      title: "Easy Tracking",
      description: "Track flights effortlessly with our intuitive interface.",
    },
  ];

  return (
    <Box className={styles.featuresSection}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          className={styles.featuresTitle}
        >
          Discover Our Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className={styles.featureCard}>
                {feature.icon}
                <Typography
                  variant="h6"
                  gutterBottom
                  className={styles.featureTitle}
                >
                  {feature.title}
                </Typography>
                <Typography className={styles.featureDescription}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
