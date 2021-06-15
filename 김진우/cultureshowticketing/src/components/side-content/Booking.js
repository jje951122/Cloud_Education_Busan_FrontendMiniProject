import moment from "moment";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import SelectCalendar from "./SelectCanlendar";
import Seat from "./Seat";
import "./Booking.css";
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
        <div>
          <SelectCalendar style={{border:'none'}} func={ChangeDate} />
        </div>

        <div className="content">
          <h3>캐스팅</h3>
          <p>윤도현, 엄기준, 차지연 ...</p>
        </div>

        <button className="ctlbtn" onClick={() => setValue(false)}>
          다음
        </button>
      </div>
    );
  } else {
    console.log(date);
    return (
      <div className="container">
        <Seat />

        <div className="SeatLevel">
          <div className="R"></div>
          <div className="txt">R석</div>
          <div className="S"></div>
          <div className="txt">S석</div>
          <div className="A"></div>
          <div className="txt">A석</div>
          <div className="B"></div>
          <div className="txt">B석</div>
        </div>
        <div>
          <button
            className="ctlbtn"
            onClick={() => {
              alert(date);
              setValue(true);
            }}
          >
            결제
          </button>
          <button className="ctlbtn" onClick={() => setValue(true)}>
            이전
          </button>
        </div>
      </div>
    );
  }
};

export default Booking;
