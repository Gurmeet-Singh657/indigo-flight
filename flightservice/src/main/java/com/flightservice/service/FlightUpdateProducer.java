package com.flightservice.service;

import com.flightservice.model.Flight;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class FlightUpdateProducer {
    private final KafkaTemplate<String, Flight> kafkaTemplate;

    public FlightUpdateProducer(KafkaTemplate<String, Flight> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendFlightUpdate(Flight flight) {
        log.info("Sending Flight Update for the flight");
        kafkaTemplate.send("flight-notifications", flight);
    }
}
