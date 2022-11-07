import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/MainPage.css";
import DrawList from "./DrawList";
import SearchContainer from "./SearchContainer";

export default function MainPage() {
  return (
    <div className="Mainpage">
      <div className="Logo">
        <img
          src="https://opgg-static.akamaized.net/logo/20221010045639.2625f6aece594c4fad77dcb70effe126.png?image=q_auto,f_webp,w_auto&v=1666077951780"
          alt="메인페이지 로고"
        />
      </div>
      <SearchContainer />
    </div>
  );
}
