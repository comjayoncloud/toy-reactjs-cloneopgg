import React from "react";
import "./css/game_stat.css";

class GameStat extends React.Component {
  render() {
    return (
      <div className="game_stat">
        <span className="kda">{this.props.stat}</span>
      </div>
    );
  }
}
export default GameStat;
