import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SelectCalendar = ({ data , func }) => {
  const [value, setValue] = useState(new Date());

  const onDateChange = (date) => {
    setValue(date)
    console.log(date);
    func(date);
  };

  return (
    <div className="Calendar_container">
      <div className='content'>
        <h3>관람일</h3>
        {/* <text>{moment(value).format("YYYY-MM-DD")}</text> */}
        <div className="calen">
          <Calendar onChange={onDateChange} value={value.date} />
        </div>
      </div>
    </div>
  );
};
export default SelectCalendar;
