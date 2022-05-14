import React from "react";
import "./css/not_my_team.css";

class NotMyTeam extends React.Component {
  render() {
    console.log("NotMyTeam");
    return (
      <div className="not_my_team">
        <p>{this.props.notmyTeaem}</p>
      </div>
    );
  }
}
export default NotMyTeam;
