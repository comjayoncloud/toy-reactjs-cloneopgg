import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/MainPage.css";
import DrawList from "./DrawList";
import SearchContainer from "./SearchContainer";

export default function MainPage() {
  // ID 변수 선언후 SearchContainer 컴포넌트에 넘겨주기
  // ID 값 잘 전달받아옴.
  // const [id, setId] = useState(null);
  // console.log(id);
  // const [data, setData] = useState(null);

  // Data 가져오기! axios 사용 . id 값에 변화가 생기면 반응.
  // useEffect(() => {
  //   async function fetchData() {
  //     const url = `http://www.lolproject-bakcend.com/api/allinfo?id=${id}`;

  //     // console.log(url);
  //     const data = await axios.get(url);
  //     setData(data.data);
  //     // console.log(data);
  //   }
  //   fetchData();
  //   // console.log(data);
  // }, [id]);

  return (
    <div className="Mainpage">
      <div className="Logo">
        <img
          src="https://opgg-static.akamaized.net/logo/20221010045639.2625f6aece594c4fad77dcb70effe126.png?image=q_auto,f_webp,w_auto&v=1666077951780"
          alt="메인페이지 로고"
        />
      </div>
      <SearchContainer />
      {/* <SearchContainer setId={(id, setId)} /> */}
      {/* {data && <DrawList data={data} />} */}
    </div>
  );
}
