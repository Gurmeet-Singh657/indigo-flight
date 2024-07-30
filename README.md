# AirWave ✈️

**AirWave** is a comprehensive system developed for the Hack to Hire 2024 challenge. It provides real-time updates and notifications on flight statuses, including delays, cancellations, and gate changes. The system is designed to keep passengers informed with timely updates and offers administrators tools for efficient flight management.

## Features 🌟

- **Real-time Flight Updates:** Displays current flight status, including delays, cancellations, and gate changes.
- **Push Notifications:** Sends notifications for flight status changes via email using Kafka.
- **Admin Dashboard:** Allows administrators to manage and update flight information.
- **Secure Authentication:** Integrated user authentication using Firebase Authentication.
- **Real-time Updates:** Utilizes WebSockets for delivering real-time updates to users.

## TechStack Used ⚙️

**Frontend:** React.js, HTML, CSS, JavaScript  
**Backend:** Spring Boot, MongoDB, Firebase Authentication, Kafka, WebSockets

## Screenshots 📸

### Home Page 🏠

The Home Page provides an overview of the application, featuring prominent cards for Testimonials and Features. Testimonials highlight user feedback, while the Features card outlines the core functionalities and benefits of the application.

![Home Page UI Screenshot](https://github.com/user-attachments/assets/bde465c5-4598-4f5f-9bd3-36636ca00c88)

### Admin Dashboard 🛠️

The Admin Dashboard allows administrators to efficiently manage and update flight information. It provides an overview of flight statuses and facilitates easy handling of updates and changes.

![Admin Dashboard Screenshot](https://github.com/user-attachments/assets/93c95fe0-f518-47c0-9c10-b7818c1dc8b6)

### Admin Performing Flight Updates ✍️

Admins can perform flight update changes through the application. This functionality allows them to modify flight details and status, ensuring that information remains accurate and up-to-date.

![Admin Performing Flight Updates](https://github.com/user-attachments/assets/d2a44518-8c1c-4ad8-bfaf-f2b7da7ff70d)

### Email Notification Using Kafka 📧

Kafka is utilized with Spring Boot to handle real-time email notifications for passengers. Kafka topics push updates about flight changes, and a Kafka consumer processes these messages to send timely email alerts to passengers.

![Flight Status Email Notification](https://github.com/user-attachments/assets/3e65869b-736b-42cf-84fb-08969687c580)

### Real-time Updates of Flight for Client Using WebSockets 🌐

WebSockets are used to provide real-time flight updates to clients. This setup allows clients to receive instant notifications about flight status changes, ensuring they stay informed with up-to-the-minute information.

![Real Time Flight Updates](https://github.com/user-attachments/assets/e0d2cd88-12ba-4919-811a-51eed1543722)

### Google Authentication 🔐

This section shows the Google Authentication interface used for secure user login. It allows users to sign in with their Google accounts, ensuring a seamless and secure login experience.

![Google Authentication](https://github.com/user-attachments/assets/4afb7c20-c032-431d-8e63-c50f7796b367)

## Installation and Setup 🛠️

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Gurmeet-Singh657/indigo-flight.git
