import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button,
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  Place,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Cancel as CancelIcon,
  LocalAirportOutlined,
} from "@mui/icons-material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import axios from "axios";
import styles from "./FlightCard.module.css";

const FlightCard = ({ flight, onUpdateStatus, isAdmin }) => {
  const [open, setOpen] = useState(false);
  const [newStatus, setNewStatus] = useState(flight.status);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      console.error("Token Not Found");
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    onUpdateStatus(flight.id, newStatus);
    setOpen(false);
    flight = { ...flight, status: newStatus };
    if (token) {
      await axios.put(`http://localhost:8081/flights/${flight.id}`, flight, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "On Time":
        return <CheckCircleIcon sx={{ color: "#4caf50" }} />;
      case "Delayed":
        return <ErrorIcon sx={{ color: "#ff9800" }} />;
      case "Cancelled":
        return <CancelIcon sx={{ color: "#f44336" }} />;
      default:
        return <Place sx={{ color: "#9e9e9e" }} />;
    }
  };

  return (
    <div>
      <div className={styles.flightCard}>
        <div>
          <div className={styles.flightCardBox}>
              <div
                className={styles.header}
              >
                <ConnectingAirportsIcon className={styles.icon}/>
                <span className={styles.locnText}>{flight.departureAirport}</span> - <span className={styles.locnText}>{flight.arrivalAirport}</span>
              </div>
              <div className={styles.flightId}>
                <LocalAirportOutlined className={styles.icon} /> Flight ID:{" "}
                {flight.id}
              </div>
              <div className={styles.gateNo}>
                <Place className={styles.icon} /> Gate No.: {flight.gateNo}
              </div>
              <div className={styles.departure}>
                <AccessTimeIcon className={styles.icon} /> Departure Time:{" "}
                {new Date(flight.departureDate).toLocaleString()}
              </div>
              <div className={styles.status}>
                {getStatusIcon(flight.status)}{" "}
                <span style={{ marginLeft: 8 }}>Status: {flight.status}</span>
              </div>
            </div>
          </div>
          {isAdmin && (
            <button onClick={handleClickOpen} className={styles.editButton}>
              Change Flight Status
            </button>
          )}
          </div>

      {isAdmin && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Flight Status</DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={newStatus}
                label="Status"
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <MenuItem value="On Time">On Time</MenuItem>
                <MenuItem value="Delayed">Delayed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default FlightCard;
