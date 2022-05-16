import React from "react";
import "./css/ChampIcon.css";

class ChampIcon extends React.Component {
  render() {
    // console.log(this.props.mychamp);
    const imgSrc = `https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${this.props.champ}.png`;
    return <img className="icon" src={imgSrc} alt="new" />;
  }
}
export default ChampIcon;
