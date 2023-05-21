import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className="calendarTitle">
        <h3>Calendar For The Year 2023</h3>
      </div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="fullCalendar"
      />
    </div>
  );
};

export default MyCalendar;
