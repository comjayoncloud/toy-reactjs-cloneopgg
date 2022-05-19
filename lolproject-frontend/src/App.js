import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MatchInfo,
  ChampInfo,
  GameStat,
  GameType,
  Participants,
} from "./presentationComponent";
import "./app.css";

const App = () => {
  // 함수형 컴포넌트 : function 으로 정의하고 return 문에 jsx 코드를 반환

  // get data
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://13.57.243.145:8080/api/allinfo");
      setData(data.data);
    }
    fetchData();
  }, []);
  console.log(data);

  const tmp = {
    spellName: [
      { spellName: "SummonerFlash" },
      { spellName: "SummonerSnowball" },
    ],
  };

  // draw action
  return (
    <div>
      <ul className="all_list">
        {data &&
          data.map((data, index) => (
            <li className="one_list">
              {
                <MatchInfo winNlose={data.gameResult}>
                  <GameType
                    type={data.gameType}
                    result={data.gameResult}
                  ></GameType>
                  <ChampInfo
                    spellName={tmp.spellName}
                    mychamp={data.champName}
                  ></ChampInfo>
                  <GameStat stat={data.gameStat} />
                  <Participants
                    myTeam={data.myTeam}
                    notmyTeam={data.notmyTeam}
                  />
                </MatchInfo>
              }
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
