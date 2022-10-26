import React from "react";
import "../Css/SearchContainer.css";
export default function SearchContainer(props) {
  const handleChange = (event) => {
    // props.setId(event.target.value);
    console.log("암것도아님");
  };
  const handleSubmit = (event) => {
    props.setId(event.target[0].value);
    event.preventDefault();
  };
  return (
    <div className="SearchContainer">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <div className="SearchFormRegion">
          <small className="label">Region</small>
          <div>Korea</div>
        </div>

        <div className="SearchFormId">
          <label className="label">Search</label>
          <input
            type="text"
            placeholder="소환사명, 소환사명, ..."
            onChange={handleChange}
          />
        </div>
      </form>
      <button>클릭</button>
    </div>
  );
}
