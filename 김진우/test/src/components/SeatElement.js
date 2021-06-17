import React, { useState } from "react";
import "./SeatElement.css";

const SeatElement = ({ get, set, number, color }) => {
  const [checked, setChecked] = useState(false);

  const onClick = (e) => {
    if (checked) {
      setChecked(!checked);
      set(get() + 1);
      console.log("unchecked : " + number);
    } else {
      if (get() > 0) {
        setChecked(!checked);
        set(get() - 1);
        console.log("checked : " + number);
      }
    }
  };

  return (
    <div
      style={{ backgroundColor: { color } }}
      className={checked ? "box checked" : "box unchecked"}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default SeatElement;
