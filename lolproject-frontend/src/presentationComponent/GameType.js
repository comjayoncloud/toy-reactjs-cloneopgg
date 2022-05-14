import React from "react";
import "./css/game_type.css";

class GameType extends React.Component {
  render() {
    console.log("gameType");
    return (
      <div className="game_type">
        <p>{this.props.type}</p>
      </div>
    );
  }
}
export default GameType;
