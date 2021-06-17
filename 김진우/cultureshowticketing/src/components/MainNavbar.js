import React from "react";
import "./MainNavbar.scss";

const MainNavbar = () => {
  return (
    <div class="main_contents_head">
      <ul class="navi_bar">
        <li>
          <a href="#">뮤지컬</a>
        </li>
        <li>
          <a href="#">콘서트</a>
        </li>
        <li>
          <a href="#">연극</a>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbar;
