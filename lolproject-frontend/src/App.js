import React from "react";
import {
  MatchInfo,
  ChampInfo,
  GameResult,
  GameStat,
  GameType,
  Participants,
  NotMyTeam,
  SpellIcon,
} from "./presentationComponent";
import "./app.css";

function App() {
  const tmp = {
    gameType: "무작위총력전",
    gameResult: "승/패",
    champName: "제라스",
    gameStat: "9킬 7데스 10어시",
    myTeam: [
      { champ: "Xerath", name: "빵뒤를흔드록바" },
      { champ: "Pyke", name: "트롤5남매넷째" },
      { champ: "Jinx", name: "홍교수님" },
      { champ: "Jhin", name: "바텀권위자조돔황" },
      { champ: "Ziggs", name: "블랙야쿠" },
    ],

    notmyTeam: [
      { champ: "Amumu", name: "VENOMIAC" },
      { champ: "Karma", name: "Arcra" },
      { champ: "Zed", name: "호랑이쮸쮸" },
      { champ: "Kaisa", name: "재미동동이" },
      { champ: "Sylas", name: "코 랴" },
    ],
    // champ: "Ahri",
    spellName: [
      { spellName: "SummonerFlash" },
      { spellName: "SummonerSnowball" },
    ],
  };

  return (
    <div>
      <ul className="all_list">
        <li className="one_list">
          <MatchInfo>
            <GameType type={tmp.gameType} />
            <GameResult result={tmp.gameResult} />
            <ChampInfo
              champ={tmp.champName}
              spellName={tmp.spellName}
              mychamp={tmp.myTeam[0]}
            ></ChampInfo>
            <GameStat stat={tmp.gameStat} />
            <Participants myTeam={tmp.myTeam} notmyTeam={tmp.notmyTeam} />
            {/* <NotMyTeam notmyTeaem={tmp.notmyTeam} /> */}
            {/* <Participants notmyTeam={tmp.notmyTeam} /> */}
          </MatchInfo>
        </li>
      </ul>
    </div>
  );
}

export default App;
