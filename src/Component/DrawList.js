import React from "react";
import "../Css/DrawList.css";

export default function DrawList(props) {
  const data = props.data;
  console.log(data);
  return (
    <div className="DrawList">
      <small> 검색결과</small>
      <li>
        <div className="Lose">
          <div className="Game">
            <div className="GameType">CLASSIC</div>
            <div className="GameResult">패</div>
          </div>
          <div className="ChampInfo">
            <div>
              <img
                class="Icon"
                src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Morgana.png"
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
            <div className="ChampName">모르가나</div>
          </div>
          <div className="GameStat">
            <div className="Kda">3/5/1</div>
          </div>
          <div className="Participants">
            <ul className="MyTeam">
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
            </ul>
            <ul className="EnemyTeam">
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div className="Win">
          <div className="Game">
            <div className="GameType">CLASSIC</div>
            <div className="GameResult">승</div>
          </div>
          <div className="ChampInfo">
            <div>
              <img
                class="Icon"
                src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Morgana.png"
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
            <div className="ChampName">모르가나</div>
          </div>
          <div className="GameStat">
            <div className="Kda">3/5/1</div>
          </div>
          <div className="Participants">
            <ul className="MyTeam">
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
            </ul>
            <ul className="EnemyTeam">
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
              <li>
                <div>
                  <img
                    className="Icon"
                    src="https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png"
                    alt="SummonerSnowball"
                  ></img>
                </div>
                <div>챔프이름</div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </div>
  );
}
