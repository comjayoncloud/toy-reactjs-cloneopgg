import React from "react";
import "../Css/SearchContainer.css";
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
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
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <button>클릭</button>
      </div>
    );
  }
}
export default SearchContainer;
