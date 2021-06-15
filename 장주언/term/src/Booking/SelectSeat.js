import React, { useState } from "react";

const SelectSeat = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <>
      <h1>좌석현황</h1>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        +1
      </button>
      <text>{cnt}</text>
      <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      >
        +1
      </button>
    </>
  );
};
export default SelectSeat;
