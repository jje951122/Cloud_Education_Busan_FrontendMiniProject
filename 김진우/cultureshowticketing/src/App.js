import React, { useState } from "react";
import "./App.css";
import Summary from "./components/Summary";
import Detail from "./components/Detail";
import Booking from "./components/side-content/Booking";
import Footer from "./components/Footer";

const App = () => {
  const [contents] = useState({
    title: "2021 뮤지컬 〈광화문 연가〉",
    image:
      "https://ticketimage.interpark.com/Play/image/large/21/21004339_p.gif",
    place: "예술의전당 오페라극장",
    period: "2021.07.16 ~2021.09.05",
    time: "160분(인터미션 20분)",
    age: "8세이상 관람가능",
    mainPrice: "60,000원~150,000원",
    rPrice: "150,000원",
    sPrice: "120,000원",
    aPrice: "90,000원",
    bPrice: "60,000원",
  });

  const [modalContent] = useState({
    modalTitle: "공연장 정보",
    modalTexts: [
      "예술의전당",
      "전화번호 : 02-580-1300",
      "도로명 주소: 서울시 서초구 남부순환로 2406 예술의전당",
      "지번 주소: 서울시 서초구 서초동 700번지",
    ],
  });

  const [castingCardContents] = useState([
    {
      playName: "명우",
      realName: "윤도현",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/09/09/0400040909_17523_02512.gif",
    },
    {
      playName: "명우",
      realName: "엄기준",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_4225_01.543.gif",
    },
    {
      playName: "월하",
      realName: "차지연",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_4131_012.jpg",
    },
    {
      playName: "월하",
      realName: "김호영",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_4522_011041.gif",
    },
    {
      playName: "수아",
      realName: "전혜선",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_3821_01.jpg",
    },
    {
      playName: "수아",
      realName: "리사",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/07/01/0400040701_4205_011.jpg",
    },
    {
      playName: "시영",
      realName: "문진아",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/07/0400040807_9910_021.gif",
    },
    {
      playName: "시영",
      realName: "송문선",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/16/04/0400041604_39503_02335.gif",
    },
    {
      playName: "과거명우",
      realName: "양지원",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/13/08/0400041308_32898_02819.gif",
    },
    {
      playName: "과거명우",
      realName: "황순종",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/03/0400041903_44400_02115.gif",
    },
    {
      playName: "과거수아",
      realName: "홍서영",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/16/07/0400041607_39951_02102.gif",
    },
    {
      playName: "중곤",
      realName: "심수영",
      image:
        "https://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/08/0400041908_45194_02803.gif",
    },
  ]);

  const [concertDetailInformation] = useState([
    { content: "예매가능시간: 관람 1시간전" },
    {
      content:
        "화,목,금 7시 30분 / 수 3시, 7시 30분 / 주말 및 공휴일 2시, 6시 30분 / 월 공연 없음",
    },
    { content: "* 7/28(수) 3시 공연 없음" },
    {
      content:
        "※ 가변석은 거리두기 격상 시, 일괄 취소되는 좌석으로 예매 전 유의부탁드립니다. (가변석을 포함한 예매건 일괄 취소)",
    },
    {
      content:
        "※ 본 공연은 오케스트라피트석(OP석)을 판매하지 않습니다. 예매 시 참고하시기 바랍니다.",
    },
    {
      content:
        "※ 극장, 공연제작사 및 관계사의 협의에 따라 일부 회차 좌석이 마감되었습니다.",
    },
  ]);

  const [componeyInfomation] = useState([
    { content: "제작 : CJ ENM" },
    { content: "주최 : 예술의전당, CJ ENM" },
    { content: "마케팅 : ㈜랑" },
    { content: "홍보 : (주)샘컴퍼니" },
    { content: "문의 : 오픈리뷰(주) 1588-5212" },
  ]);

  return (
    <div>
      <div className="appContainer">
        <section>
          <Summary contents={contents} modalContent={modalContent}></Summary>
          <Detail
            castingCardContents={castingCardContents}
            concertDetailInformation={concertDetailInformation}
            componeyInfomation={componeyInfomation}
          ></Detail>
        </section>
        <section>
          <Booking></Booking>
        </section>
        <div>
          <a href="/#" className="topbutton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-bar-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </div>
      </div>

      <footer style={{ display: "block" }}>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
