import React, { useState } from "react";
import "./Seat.css";
import SeatElement from "./SeatElement";

const Seat = () => {
  const [canChooseCount, setCanChooseCount] = useState(3);
  const getCanChooseCount = () => canChooseCount;
  const Numbers = Array.from(Array(37 - 1).keys())
    .map((v) => v + 1)
    .map((v) => v);

  return (
    <div className="container">
      <div className="row">
        {Numbers.map((number, index) => (
          <SeatElement
            key={index}
            get={getCanChooseCount}
            set={setCanChooseCount}
            number={number}
          ></SeatElement>
        ))}
      </div>
    </div>
  );
};

export default Seat;
