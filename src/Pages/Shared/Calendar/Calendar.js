import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";

const Calendar = ({selectedDate, setSelectedDate}) => {
  
  return (
  <div>
      <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
    <p>You have selected date : {format(selectedDate, 'PP')} </p>
  </div>
  );
};

export default Calendar;