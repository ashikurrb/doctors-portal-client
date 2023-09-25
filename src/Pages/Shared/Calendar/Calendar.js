import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";

const Calendar = ({date, setDate}) => {
  
  return (
  <div>
      <h3>Select Date </h3>
      <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    />
    {/* <p>You have selected date : {format(date, 'PP')} </p> */}
  </div>
  );
};

export default Calendar;