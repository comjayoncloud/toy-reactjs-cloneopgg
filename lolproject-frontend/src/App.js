import React from "react";
import MatchInfo from "./presentationComponent/MatchInfo.js";
import GameType from "./presentationComponent/GameType.js";
import GameResult from "./presentationComponent/GameResult.js";
import ChampInfo from "./presentationComponent/ChampInfo.js";
import GameStat from "./presentationComponent/GameStat.js";
import MyTeam from "./presentationComponent/MyTeam.js";
import NotMyTeam from "./presentationComponent/NotMyTeam.js";

function App() {
  const tmp = {
    gameType: "무작위총력전",
    gameResult: "승/패",
    champName: "제라스",
    gameStat: "9킬 7데스 10어시",
    myTeam: "블라블라블라",
    notmyTeam: "일라일라일라",
  };
  return (
    <div>
      <header>
        <MatchInfo />
      </header>
      <GameType type={tmp.gameType} />
      <GameResult result={tmp.gameResult} />
      <ChampInfo champ={tmp.champName} />
      <GameStat stat={tmp.gameStat} />
      <MyTeam myTeam={tmp.myTeam} />
      <NotMyTeam notmyTeaem={tmp.notmyTeam} />
    </div>
  );
}

export default App;
