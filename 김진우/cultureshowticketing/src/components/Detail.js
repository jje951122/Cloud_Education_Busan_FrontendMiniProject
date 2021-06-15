import React from "react";
import "./Detail.css";
import Casting from "./Casting";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const Detail = ({ castingCardContents, concertDetailInformation }) => {
  const { TabPane } = Tabs;

  return (
    <div className="tabGroup">
      <Tabs defaultActiveKey="1">
        <TabPane tab="공연정보" key="1">
          <div className="detailContentTitle">
            <b>공연시간 정보</b>
          </div>
          {concertDetailInformation.map((info) => (
            <p>{info.content}</p>
          ))}
          <h2 className="detailContentTitle">
            <b>공연상세 / 캐스팅일정</b>
          </h2>
          <img
            src="https://ticketimage.interpark.com/Play/image/etc/21/21004339-07.jpg"
            alt="공연상세와 캐스팅일정"
          ></img>
        </TabPane>
        <TabPane tab="캐스팅정보" key="2">
          <Casting castingCardContents={castingCardContents}></Casting>
        </TabPane>
        <TabPane tab="부가정보" key="3">
          <div className="detailContentTitle">
            <b>기획사 정보</b>
          </div>
          <p>제작 : CJ ENM</p>
          <p>주최 : 예술의전당, CJ ENM</p>
          <p>마케팅 : ㈜랑</p>
          <p>홍보 : (주)샘컴퍼니</p>
          <p>문의 : 오픈리뷰(주) 1588-5212</p>
          <div className="detailContentTitle">
            <b>티켓 수령 안내</b>
          </div>
          <p style={{fontWeight: "bold"}}>예약 번호 입장</p>
          <ul>
            <li>
              공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을 수령하실
              수 있습니다.
            </li>
            <li>
              상단 예매확인/취소 메뉴에서 예매내역을 프린트하여 가시면
              편리합니다.
            </li>
          </ul>
          <p style={{fontWeight: "bold"}}>티켓배송</p>
          <ul>
            <li>
              예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말, 공휴일을
              제외한 영업일 기준)
            </li>
            <li>
              배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가 시
              경우에 따라 대리 수령도 가능합니다.
            </li>
            <li>
              공연 3일 전까지 티켓을 배송받지 못하신 경우 고객센터(1544-1555)로
              연락 주시기 바랍니다.
            </li>
            <li>
              반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며, 공연
              관람 및 환불이 불가합니다.
            </li>
            <li>
              티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이
              불가합니다.
            </li>
            <li>
              부득이하게 주소 변경이 필요하신 경우 각 배송사에 수취 거절 요청
              후, 고객센터(1544-1555)로 재배송 신청할 수 있습니다.
            </li>
          </ul>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Detail;
