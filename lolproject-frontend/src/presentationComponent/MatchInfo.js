import React from "react";
import "./css/MatchInfo.css";

class MatchInfo extends React.Component {
  render() {
    if (this.props.winNlose == "승") {
      return (
        <div className="body">
          <div className="match_info_win">{this.props.children}</div>
        </div>
      );
    } else if (this.props.winNlose == "패")
      return (
        <div className="body">
          <div className="match_info_lose">{this.props.children}</div>
        </div>
      );

    return (
      <div className="body">
        <div className="match_info">{this.props.children}</div>
      </div>
    );
  }
}
export default MatchInfo;
