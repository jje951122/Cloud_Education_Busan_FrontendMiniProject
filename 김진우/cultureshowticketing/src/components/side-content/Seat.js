import React, { useState } from "react";
import "./Seat.css";
import SeatElement from "./SeatElement";

const Seat = () => {
  const [canChooseCount, setCanChooseCount] = useState(0);
  const getCanChooseCount = () => canChooseCount;
  const Numbers = Array.from(Array(61 - 1).keys())
    .map((v) => v + 1)
    .map((v) => v);
  
  return (
    <div>
      <h3>좌석현황</h3>
      <div className="cnt">
        <span>총 인원 </span>
        <button
          id="count"
          onClick={() =>
            canChooseCount !== 4 ? setCanChooseCount(canChooseCount + 1) : null
          }
        >
          +
        </button>
        <text> {canChooseCount} </text>
        <button
          id="count"
          onClick={() =>
            canChooseCount !== 0 ? setCanChooseCount(canChooseCount - 1) : null
          }
        >
          -
        </button>
        <span className="rule"> &nbsp;&nbsp;*최대 4명 선택가능</span>
      </div>
      <div>
        <div className="screen">screen</div>
        <div className="row">
          {Numbers.map((number, index) => (
            <SeatElement
              key={index}
              get={getCanChooseCount}
              set={setCanChooseCount}
              number={number}
              color={
                number <= 10
                  ? "purple"
                  : number <= 20
                  ? "green"
                  : number <= 30
                  ? "skyblue"
                  : number <= 60
                  ? "orange"
                  : "None"
              }
            ></SeatElement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seat;
