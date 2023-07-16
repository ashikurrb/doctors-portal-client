import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, selectedDate }) => {
  const { name, time, price, space } = booking;
  const [openBooking, setOpenBooking] = useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
<>
<Grid item xs={12} sm={6} md={4}>
      <Paper elevation={2} sx={{py: 5}}>
        <Typography sx={{color:'info.main', fontWeight: 600 }}  variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {time}
        </Typography>
        <Typography variant="caption" gutterBottom display="block">
          {space} SPACES AVAILABLE
        </Typography>
        <Button onClick={handleBookingOpen} variant="contained" color="primary">BOOK APPOINTMENT</Button>
      </Paper>
    </Grid>
    <BookingModal
    selectedDate={selectedDate}
    booking={booking}
    openBooking={openBooking}
    handleBookingClose={handleBookingClose}
    ></BookingModal>
</>
  );
};

export default Booking;
