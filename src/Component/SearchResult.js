import Header from "./Header";
import Ad from "./Ad";
import axios from "axios";
import React, { useEffect, useState } from "react";

import DrawList from "./DrawList";
import { useLocation } from "react-router";

export default function SearchResult(props) {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      //   console.log("hello");
      console.log(id);
      const settingId = await setId(state);
      console.log(id);
      const url =
        await `http://www.lolproject-bakcend.com/api/allinfo?id=${id}`;

      // console.log(url);
      const data = await axios.get(url);
      setData(data.data);
      console.log(data);
    }
    fetchData();
    // console.log("data가잇을까요?");
    // console.log(data);
  }, [id]);
  console.log(state);
  return (
    <div className="SearchResult">
      <Header />
      <Ad />
      <DrawList />
    </div>
  );
}
