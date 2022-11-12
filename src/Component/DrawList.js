import React from "react";
import "../Css/DrawList.scss";
import Participants from "./Participants";

export default function DrawList(props) {
  const data = props.data;

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
              <div className="ChampInfoContainer">
                <div className="ChampInfo">
                  <div className="ChampIcon">
                    <img
                      className="Icon"
                      src={
                        "https://opgg-static.akamaized.net/meta/images/lol/champion/" +
                        data.champName +
                        ".png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1668149208086"
                      }
                      alt="챔피언아이콘"
                    />
                  </div>
                  <div className="Spells">
                    <img
                      className="SpellImg"
                      src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerFlash.png"
                      alt="SummonerFlash"
                    />
                    <img
                      className="SpellImg"
                      src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                      alt="SummonerSnowball"
                    />
                  </div>
                  <div className="Runes">
                    <div className="Rune1">
                      <img
                        src={
                          "https://opgg-static.akamaized.net/meta/images/lol/perk/" +
                          data.summonerRunes[0] +
                          ".png?image=q_auto,f_webp,w_44&v=1668149208086"
                        }
                        alt={data.summonerRunes[0]}
                      />
                    </div>
                    <div className="Rune2">
                      <img
                        src={
                          "https://opgg-static.akamaized.net/meta/images/lol/perkStyle/" +
                          data.summonerRunes[1] +
                          ".png?image=q_auto,f_webp,w_44&v=1668149208086"
                        }
                        alt="룬정보2"
                      />
                    </div>
                  </div>
                  <div className="GameStat">
                    <div className="KdaStat">{data.gameStat}</div>
                    <div className="KdaGrade">{data.summonerKda}:1 평점</div>
                  </div>
                  <div className="GameStat2">
                    <div className="killParticipation">
                      킬관여 {data.killParticipation}%
                    </div>
                    <div className="Cs">CS {data.summonerCS}</div>
                  </div>
                </div>
                <div className="summonerItems">
                  <ul>
                    {data.summonerItem.map((a, index) =>
                      a === 0 ? (
                        <li key={index}></li>
                      ) : (
                        <li key={index}>
                          <div>
                            <img
                              src={
                                "https://opgg-static.akamaized.net/meta/images/lol/item/" +
                                a +
                                ".png?image=q_auto,f_webp,w_44&v=1668149208300"
                              }
                              alt={`아이템${index}`}
                            />
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <Participants myTeam={data.myTeam} notmyTeam={data.notmyTeam} />
            </div>
          </li>
        ))}
    </div>
  );
}
