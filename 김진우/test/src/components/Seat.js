import React from "react";
import "./Seat.css";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';

const style = { background: '#0092ff', padding: '2px', textAlign: "center"};

const Seat = () => {
  return (
    <Row gutter={[10, 10  ]}>
      <Col className={"gutter-row"} span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>

    </Row>
  );
};

export default Seat;
