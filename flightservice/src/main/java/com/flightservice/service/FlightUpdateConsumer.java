package com.flightservice.service;

import com.flightservice.model.Flight;
import com.flightservice.model.Passenger;
import com.flightservice.repository.PassengerRepository;
import com.flightservice.service.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class FlightUpdateConsumer {

    @Autowired
    private EmailService emailService;

    @Autowired
    private PassengerRepository passengerRepository;

    @KafkaListener(topics = "flight-notifications", groupId = "flight-group")
    public void consume(Flight flight) {
        String subject = "Flight Update: " + flight.getStatus();

        String htmlBody = "<h1>Flight Details</h1>"
                + "<img src='https://media.istockphoto.com/id/458254159/photo/air-india-boeing-777-300er.jpg?s=612x612&w=0&k=20&c=3SfO4RBV5V4BZlnZnkvtgXQXoI-8VdMYzfzEQpP3ci4=' alt='Flight Image' style='width:600px;height:400px;'>"
                + "<p><strong>Flight Number:</strong> " + flight.getFlightNumber() + "</p>"
                + "<p><strong>Status:</strong> " + flight.getStatus() + "</p>"
                + "<p><strong>Airline:</strong> " + flight.getAirline() + "</p>"
                + "<p><strong>Departure Airport:</strong> " + flight.getDepartureAirport() + "</p>"
                + "<p><strong>Arrival Airport:</strong> " + flight.getArrivalAirport() + "</p>"
                + "<p><strong>Departure Date:</strong> " + flight.getDepartureDate() + "</p>"
                + "<p><strong>Is Premium:</strong> " + flight.getIsPremium() + "</p>";

        List<String> customers = getCustomersForFlight(flight.getFlightNumber());
        log.info("Sending Email to customers" + customers);
        for (String customer : customers) {
            emailService.sendEmail(customer, subject, htmlBody);
        }
    }

    private List<String> getCustomersForFlight(String flightNumber) {
        List<String> emails = new ArrayList<>();
        List<Passenger> passengers = passengerRepository.findAll();
        for(Passenger passenger: passengers){
            if(passenger.getFlights().contains(flightNumber)) {
                emails.add(passenger.getEmail());
            }
        }
        return emails;
    }


}
