import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
const SelectCalendar = ({ data, func }) => {
  const [value, setValue] = useState({
    date: new Date(),
  });

  const onDateChange = (date) => {
    data = value.date;
    func(moment(date).format("YYYY-MM-DD"));
  };
  return (
    <div className="Calendar_container">
      <div>
        <h1>날짜 선택</h1>
        <Calendar onChange={onDateChange} value={value.date} />
      </div>
    </div>
  );
};
export default SelectCalendar;
