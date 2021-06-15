import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import SelectCalendar from "./SelectCanlendar";
import SelectSeat from "./SelectSeat";

const Booking = () => {
  const [value, setValue] = useState({
    flag: true,
    date: new Date(),
  });

  const ChangeDate = (value) => {
    console.log(value);
  };

  return (
    <div className="container">
      <div>
        <SelectCalendar date={value.date} func={ChangeDate} />
      </div>
      <div>
        <SelectSeat />
      </div>
    </div>
  );
};
export default Booking;
