import React, { Componnet } from "react";
import "../Css/SearchContainer.css";
class SearchContainer extends React.Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="SearchContainer">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <div className="SearchFormRegion">
            <small className="label">Region</small>
            <div>Korea</div>
          </div>

          <div className="SearchFormId">
            <label className="label">Search</label>
            <input
              type="text"
              placeholder="소환사명, 소환사명, ..."
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>{this.state.name}</div>
        </form>
        <button>클릭</button>
      </div>
    );
  }
}
export default SearchContainer;
