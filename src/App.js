/* eslint-disable*/

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

function App() {
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "가로수길 에스프레소 맛집",
  ]);

  let [like, likeChange] = useState(0);

  function titleButton() {
    let newArray = [...title];
    newArray[0] = "여자 코트 추천";
    titleChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={titleButton}>버튼</button>
      {title.map((title, index) => (
        <div className="list" key={index}>
          <h4>
            {index + 1}. {title}{" "}
            <span
              onClick={() => {
                likeChange(like + 1);
              }}
            >
              👍
            </span>
            {like}
          </h4>
          <p>4월 29일 발행</p>
          <hr />
        </div>
      ))}

      <Modal />
    </div>
  );
}

export default App;
