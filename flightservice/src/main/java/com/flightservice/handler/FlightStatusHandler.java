package com.flightservice.handler;

import com.flightservice.model.Flight;
import com.flightservice.model.Passenger;
import com.flightservice.repository.FlightRepository;
import com.flightservice.repository.PassengerRepository;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.*;


@Slf4j
public class FlightStatusHandler extends TextWebSocketHandler {

    private final Map<WebSocketSession, Set<String>> userSubscriptions = new HashMap<>();

    private final Logger logger = LoggerFactory.getLogger(FlightStatusHandler.class);

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private PassengerRepository passengerRepository;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        String payload = message.getPayload();
        log.info("Received message: {}", payload);
        if (payload.startsWith("subscribe:")) {
            String flight = payload.substring("subscribe:".length());
            userSubscriptions.computeIfAbsent(session, s -> new HashSet<>()).add(flight);
            log.info("Client {} subscribed to flight: {}", session.getId(), flight);
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String queryParams = session.getUri().getQuery(); // Get query parameters from the URI
        String authToken = extractAuthTokenFromQueryParams(queryParams);
        if (authToken == null || !authToken.startsWith("Bearer ")) {
            session.close(CloseStatus.BAD_DATA.withReason("Missing or invalid Authorization token"));
            return;
        }

        String idToken = authToken.substring("Bearer ".length());
        logger.info("Received idToken: {}", idToken);
        try {
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
            String userId = decodedToken.getUid();

            logger.info("userId is " + userId);

            Optional<Passenger> passenger = passengerRepository.findById(userId);
            if (passenger.isEmpty()) {
                logger.info("Passenger Not Found ");
                session.close(CloseStatus.NOT_ACCEPTABLE.withReason("User not found"));
                return;
            }

            List<String> flights = passenger.get().getFlights();
            Set<String> flightNumbers = new HashSet<>(flights);
            userSubscriptions.put(session, flightNumbers);

            log.info("Connection established for user {}: {}", userId, session.getId());
        } catch (Exception e) {
            log.error("Failed to authenticate WebSocket connection", e);
            session.close(CloseStatus.NOT_ACCEPTABLE.withReason("Authentication failed"));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        userSubscriptions.remove(session);
        log.info("Connection closed: {}", session.getId());
    }

    public void broadcastFlightUpdate(Flight flight) throws IOException {
        for (Map.Entry<WebSocketSession, Set<String>> entry : userSubscriptions.entrySet()) {
            WebSocketSession session = entry.getKey();
            Set<String> subscriptions = entry.getValue();
            if (subscriptions.contains(flight.getFlightNumber()) && session.isOpen()) {
                log.info("Sending update to client {}: flight {}, update {}", session.getId(), flight.getFlightNumber(), flight);
                session.sendMessage(new TextMessage(
                        "flight:" + flight.getFlightNumber() +
                                ",status:" + flight.getStatus() +
                                ",gate:" + flight.getGateNo() +
                                ",destination:" + flight.getArrivalAirport()
                ));
            }
        }
    }

    private String extractAuthTokenFromQueryParams(String queryParams) {
        if (queryParams == null) {
            return null;
        }

        for (String param : queryParams.split("&")) {
            String[] pair = param.split("=");
            if (pair.length == 2 && "Authorization".equals(pair[0])) {
                return pair[1];
            }
        }
        return null;
    }
}