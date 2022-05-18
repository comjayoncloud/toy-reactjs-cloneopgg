import React from "react";
import "./css/champ_info.css";
import SpellIcon from "./SpellIcon";
import ChampIcon from "./ChampIcon";

class ChampInfo extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="champ_info">
        <ChampIcon champ={this.props.mychamp.champ} />
        <SpellIcon spellName={this.props.spellName} />
        <div>{this.props.champ}</div>
      </div>
    );
  }
}
export default ChampInfo;
