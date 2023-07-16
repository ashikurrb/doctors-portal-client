import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

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
  selectedDate,
}) => {
  const { name, time, price, space } = booking;

  const handleBookSubmit = (e) => {
    alert("Your appointment has been booked successfully");
    handleBookingClose();
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
              defaultValue={selectedDate.toDateString()}
              size="small"
            />
            <TextField
              sx={{ width: "100%", mb: 3 }}
              label="Name"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              sx={{ width: "100%", mb: 3 }}
              label="Phone Number"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              sx={{ width: "100%", mb: 3 }}
              label="Email"
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
