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
  const [region, setRegion] = useState(null);
  console.log(region);
  useEffect(() => {
    async function fetchData() {
      // console.log("fetchdata 실행됨");
      //id 셋팅
      setId(state.id);
      if (state.region == "Korea") {
        setRegion("kr");
      } else if (state.region == "America") {
        setRegion("america");
      } else if (state.region == null) {
        console.log("암것도안함");
      }
      // console.log(region);

      //url 셋팅
      const url = `https://www.lolproject-bakcend.com/${region}/api/allinfo?id=${id}`;
      console.log(url);
      //data 요청
      if (id == null) {
        // console.log("id없음~");
      } else {
        const data = await axios.get(url);
        setData(data.data);
        // console.log(data.data);
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
