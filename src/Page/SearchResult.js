import Header from "../Component/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";

import DrawList from "../Component/DrawList";
import { useLocation } from "react-router";
import UserInfo from "../Component/UserInfo";

export default function SearchResult(props) {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      //id 셋팅
      setId(state);

      //url 셋팅
      const url = `https://www.lolproject-bakcend.com/api/allinfo?id=${id}`;

      //data 요청
      if (id == null) {
        console.log("id없음~");
      } else {
        const data = await axios.get(url);
        setData(data.data);
        console.log(data.data);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="SearchResult">
      <Header />
      <UserInfo id={id} />
      <DrawList data={data} />
    </div>
  );
}
