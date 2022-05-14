import React from "react";
import "./css/champ_info.css";

class ChampInfo extends React.Component {
  render() {
    console.log("ChampInfo");
    return (
      <div className="champ_info">
        <p>{this.props.champ}</p>
      </div>
    );
  }
}
export default ChampInfo;
