import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time, price, space } = booking;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }

  const handleBookSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }

    //send to server
    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true)
          handleBookingClose();
        } else {
          alert('Booking Unsuccessful! Pls Try Again')
        }
      })
    e.preventDefault();
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h5"
            sx={{ mb: 3 }}
            component="h2"
          >
            {name}
          </Typography>

          <form onSubmit={handleBookSubmit
          }>
            <TextField
              disabled
              sx={{ width: "100%", mb: 3 }}
              label="Time"
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />

            <TextField
              disabled
              sx={{ width: "100%", mb: 3 }}
              label="Date"
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <TextField required 
              sx={{ width: "100%", mb: 3 }}
              name="patientName"
              label="Name"
              defaultValue={user.displayName}
              onBlur={handleOnBlur}
              id="outlined-size-small"
              size="small"
            />
            <TextField required 
              sx={{ width: "100%", mb: 3 }}
              name="phone"
              inputProps={{ maxLength: 11, minLength: 11 } }
              label= "Phone Number"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              size="small"
            />
            <TextField required 
              sx={{ width: "100%", mb: 3 }}
              name="email"
              label="Email"
              defaultValue={user.email}
              onBlur={handleOnBlur}
              id="outlined-size-small"
              size="small"
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
