import React from "react";
import "./css/game_stat.css";

class GameStat extends React.Component {
  render() {
    console.log("GameStat");
    return (
      <div className="champ_info">
        <p>{this.props.stat}</p>
      </div>
    );
  }
}
export default GameStat;
