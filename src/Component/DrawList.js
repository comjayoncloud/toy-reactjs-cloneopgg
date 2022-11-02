import React from "react";
import "../Css/DrawList.css";
import Participants from "./Participants";

export default function DrawList(props) {
  const data = props.data;
  // console.log(data);

  return (
    <div className="DrawList">
      <small> 검색결과</small>

      {data &&
        data.map((data, index) => (
          <li key={index}>
            <div className={data.gameResult}>
              <div className="Game">
                <div className="GameType">{data.gameType}</div>
                <div className="GameResult">{data.gameResult}</div>
              </div>
              <div className="ChampInfo">
                <div>
                  <img
                    class="Icon"
                    src={
                      "https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/" +
                      data.champName +
                      ".png"
                    }
                    alt="챔피언아이콘"
                  />
                </div>
                <div className="Spells">
                  <img
                    class="SpellImg"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerFlash.png"
                    alt="SummonerFlash"
                  />
                  <img
                    class="SpellImg"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  />
                </div>
                <div className="ChampName">{data.champName}</div>
              </div>
              <div className="GameStat">
                <div className="Kda">{data.gameStat}</div>
              </div>
              <Participants myTeam={data.myTeam} notmyTeam={data.notmyTeam} />
            </div>
          </li>
        ))}
    </div>
  );
}
