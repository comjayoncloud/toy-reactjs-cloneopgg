import React from "react";
import "./css/match_info.css";

class MatchInfo extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="match_info">{this.props.children}</div>
      </div>
    );
  }
}
export default MatchInfo;
