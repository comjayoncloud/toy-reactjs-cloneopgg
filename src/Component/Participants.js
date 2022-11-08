import React from "react";
import "../Css/Participants.scss";
export default function Participants(props) {
  const myTeam = props.myTeam;
  const notmyTeam = props.notmyTeam;

  return (
    <div className="Participants">
      <ul className="MyTeam">
        {myTeam.map((data, index) => (
          <li key={index}>
            <div>
              <img
                className="Icon"
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/" +
                  data.champ +
                  ".png"
                }
                alt="챔프아이콘"
              ></img>
            </div>
            <div>{data.name}</div>
          </li>
        ))}
      </ul>
      <ul className="EnemyTeam">
        {notmyTeam.map((data, index) => (
          <li key={index}>
            <div>
              <img
                className="Icon"
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/" +
                  data.champ +
                  ".png"
                }
                alt="챔프아이콘"
              ></img>
            </div>
            <div>{data.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
