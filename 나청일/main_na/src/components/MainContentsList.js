import React from "react";
import "./MainContentsList.scss";
import img1 from "./images/라루미에르.jpg";
import img2 from "./images/리틀잭.jpg";
import img3 from "./images/마마,돈크라이.jpg";
import img4 from "./images/명동로망스.jpg";
import img5 from "./images/무인도탈출기.jpg";
import img6 from "./images/문스토리.jpg";
import img7 from "./images/시카고.jpg";

const MainContentsList = () => {
  return (
    <div class="main_contents_list">
      <h1><b>WHAT'S HOT</b></h1>
      <ul class="contents_list">
        <li>
          <a href="#">
            <img
              src={img1}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption">
              <h2>라루미에르제목</h2>
              <p>라루미에르 설명</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={img2}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption">
              <h2>리틀잭제목</h2>
              <p>리틀잭 설명</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={img3}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption">
              <h2>마마,돈크라이제목</h2>
              <p>마마,돈크라이 설명</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={img4}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption">
              <h2>명동로망스제목</h2>
              <p>명동로망스 설명</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={img5}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption" href="#">
              <h2>무인도탈출기제목</h2>
              <p>무인도탈출기 설명</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={img6}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption">
              <h2>문스토리제목</h2>
              <p>문스토리 설명</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={img7}
              alt="이미지 불러오기 실패"
              height="480"
              width="360"
            />
            <div class="caption">
              <h2>시카고제목</h2>
              <p>시카고 설명</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainContentsList;
