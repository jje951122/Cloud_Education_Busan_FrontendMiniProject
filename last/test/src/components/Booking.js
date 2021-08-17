import moment from "moment";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import SelectCalendar from "./SelectCanlendar";
import Seat from "./Seat";
import './Booking.css';
var date = new Date();

const Booking = () => {
  const [value, setValue] = useState(true);

  const ChangeDate = (value) => {
    date = moment(value).format("YYYY-MM-DD");
    console.log(value);
  };

  if (value) {
    return (
      <div className="container">
        <div className='content'>
          <SelectCalendar func={ChangeDate}/>
        </div>
        
        <div className='content'>
          <h3>캐스팅</h3>
          <p>윤도현, 엄기준, 차지연 ...</p>
        </div>
        
        <button className='ctlbtn' onClick={() => setValue(false)}>다음</button>
      </div>      
    );

  } 
  else {
    console.log(date);
    return (
      <div className="container">
        <Seat />
        <button className='ctlbtn' onClick={()=>{alert(date); setValue(true)}}>결제</button>
        <button className='ctlbtn' onClick={() => setValue(true)}>이전</button>
      </div>
    );
  }
};

export default Booking;
