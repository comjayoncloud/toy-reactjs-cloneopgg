import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
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

  const [data, setData] = useState(null);

  //async-await 안쓴거
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/allinfo");
      // const data = await axios.get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B9%B5%EB%92%A4%EB%A5%BC%ED%9D%94%EB%93%9C%EB%A1%9D%EB%B0%94?api_key=RGAPI-fa9e7109-0043-49f2-9c6d-9e3b8eb820db");
      console.log(data);
      setData(data.data);
    }
    fetchData();
  }, []);
  console.log(data);

  const tmp = {
    // gameType: "무작위총력전",
    gameResult: "승/패",
    // champName: "제라스",
    // gameStat: "9킬 7데스 10어시",
    // myTeam: [
    //   { champ: "Xerath", name: "빵뒤를흔드록바" },
    //   { champ: "Pyke", name: "트롤5남매넷째" },
    //   { champ: "Jinx", name: "홍교수님" },
    //   { champ: "Jhin", name: "바텀권위자조돔황" },
    //   { champ: "Ziggs", name: "블랙야쿠" },
    // ],

    // notmyTeam: [
    //   { champ: "Amumu", name: "VENOMIAC" },
    //   { champ: "Karma", name: "Arcra" },
    //   { champ: "Zed", name: "호랑이쮸쮸" },
    //   { champ: "Kaisa", name: "재미동동이" },
    //   { champ: "Sylas", name: "코 랴" },
    // ],
    spellName: [
      { spellName: "SummonerFlash" },
      { spellName: "SummonerSnowball" },
    ],
  };

  return (
    <div>
      <ul className="all_list">
        <li className="one_list">
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
        </li>
      </ul>
    </div>
  );
};

export default App;
