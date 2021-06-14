import React, { useState } from "react";
import "./App.css";
import Summary from "./components/Summary";

const App = () => {
  const [contents, setContents] = useState({
    title: "2021 뮤지컬 〈광화문 연가〉",
    image:
      "https://ticketimage.interpark.com/Play/image/large/21/21004339_p.gif",
    place: "예술의전당 오페라극장",
    period: "2021.07.16 ~2021.09.05",
    time: "160분(인터미션 20분)",
    age: "8세이상 관람가능",
    mainPrice: "30,000원~150,000원",
    rPrice: "150,000원",
    sPrice: "120,000원",
    aPrice: "90,000원",
    bPrice: "60,000원",
  });

  const [modalContent, setModalContent] = useState({
    modalTitle: "공연장 정보",
    modalTexts:
      ["예술의전당", "전화번호 : 02-580-1300", "주소 : 서울특별시 서초구 서초동 700번지", "홈페이지 : http://www.sac.or.kr"],
  });

  return (
    <div className="container">
      <Summary contents={contents} modalContent={modalContent}></Summary>
    </div>
  );
};

export default App;
