import React from "react";
import "./css/my_team.css";

class MyTeam extends React.Component {
  render() {
    console.log("MyTeam");
    return (
      <div className="my_team">
        <p>{this.props.myTeam}</p>
      </div>
    );
  }
}
export default MyTeam;
