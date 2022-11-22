import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import UserInfo from "../Component/UserInfo";
import DrawList from "../Component/DrawList";
import "../Css/SearchResult.scss";

import { useLocation } from "react-router";
import Spinner from "react-bootstrap/Spinner";

export default function SearchResult(props) {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      //id 셋팅
      setId(state.id);
      if (state.region === "Korea") {
        setRegion("kr");
      } else if (state.region === "America") {
        setRegion("america");
      } else if (state.region === null) {
        console.log("암것도안함");
      }

      //url 셋팅
      const url = `https://www.lolproject-bakcend.com/${region}/api/allinfo?id=${id}`;

      //data 요청
      if (id == null) {
        // console.log("id없음~");
      } else {
        const data = await axios.get(url);
        setData(data.data);
        setLoading(false);
      }
    }
    console.log(loading);
    fetchData();
  }, [id]);

  return (
    <div className="SearchResult">
      <Header />
      <UserInfo id={id} />
      {loading === true && (
        <div className="LoadingPage">
          <div className="Loading">
            <Spinner animation="grow" />
            Loading중..
          </div>
        </div>
      )}
      <DrawList data={data} />
    </div>
  );
}
