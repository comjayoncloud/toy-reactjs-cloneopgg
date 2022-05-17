import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MatchInfo,
  ChampInfo,
  GameResult,
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
      const data = await axios.get("/api/allinfo");
      setData(data.data);
    }
    fetchData();
  }, []);
  // console.log(typeof data); // object

  const tmp = {
    gameResult: "승/패",
    spellName: [
      { spellName: "SummonerFlash" },
      { spellName: "SummonerSnowball" },
    ],
  };
  // console.log(typeof tmp); // object

  console.log(data);

  // draw action
  return (
    <div>
      <ul className="all_list">
        {data &&
          data.map((data, index) => (
            <li className="one_list">
              {
                <MatchInfo>
                  <GameType type={data.gameType} />
                  <GameResult result={tmp.gameResult} />
                  <ChampInfo
                    champ={data.champName}
                    spellName={tmp.spellName}
                    mychamp={data.myTeam[0]}
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

        {/* <li className="one_list">
          {data && (
            <MatchInfo>
              <GameType type={data[0].gameType} />
              <GameResult result={tmp.gameResult} />
              <ChampInfo
                champ={data[0].champName}
                spellName={tmp.spellName}
                mychamp={data[0].myTeam[0]}
              ></ChampInfo>
              <GameStat stat={data[0]?.gameStat} />
              <Participants
                myTeam={data[0].myTeam}
                notmyTeam={data[0].notmyTeam}
              />
            </MatchInfo>
          )}
        </li> */}
      </ul>
    </div>
  );
};

export default App;
