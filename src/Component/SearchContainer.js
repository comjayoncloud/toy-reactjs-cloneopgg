import React from "react";
import "../Css/SearchContainer.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchContainer(props) {
  // const handleChange = (event) => {
  //   props.setId("null");
  //   console.log("암것도아님");
  // };
  const Navigate = useNavigate();
  const handleSubmit = (event) => {
    // props.setId(event.target[0].value);

    Navigate("/jw.gg/searchResult", { state: event.target[0].value });
    // event.preventDefault();
  };
  return (
    <div className="SearchContainer">
      <form
        className="SearchForm"
        onSubmit={(event) => {
          Navigate("/jw.gg/searchResult", { state: event.target[0].value });
        }}
      >
        <div className="SearchFormRegion">
          <small className="label">Region</small>
          <div>Korea</div>
        </div>

        <div className="SearchFormId">
          <label className="label">Search</label>
          <input type="text" placeholder="소환사명, 소환사명, ..." />
        </div>
      </form>
      <button>클릭</button>
    </div>
  );
}
