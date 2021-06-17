import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styled from 'styled-components';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import img1 from "./images/mimg1.jpg";
import img2 from "./images/mimg2.jpg";
import img3 from "./images/mimg3.jpg";

const { Header, Content } = Layout;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div>
        <div
          id="tl"
          style={{
            width: "auto",
            height: "500px",
            margin: "0 auto",
            padding: "0 350px",
            backgroundColor: "black",
          }}
        >
          <Slider {...settings}>
            <div className="img">
              <a href="#">
                <img src={img1} />
              </a>
            </div>
            <div className="img">
              <a href="#">
                <img src={img2} />
              </a>
            </div>
            <div className="img">
              <a href="#">
                <img src={img3} />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
