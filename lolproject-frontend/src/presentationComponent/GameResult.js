import React from "react";
import "./css/game_result.css";

class GameResult extends React.Component {
  render() {
    return (
      <div className="game_result">
        <p>{this.props.result}</p>
      </div>
    );
  }
}
export default GameResult;
