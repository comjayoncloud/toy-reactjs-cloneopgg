import React from "react";
import "./css/game_type.css";

class GameType extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="game">
        <div className="game_type">{this.props.type}</div>
        <div className="game_result">{this.props.result}</div>
      </div>
    );
  }
}
export default GameType;
