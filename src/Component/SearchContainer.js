import React from "react";
import "../Css/SearchContainer.scss";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchContainer(props) {
  const Navigate = useNavigate();
  const handleSubmit = (event) => {
    Navigate("/jw.gg/searchResult", { state: event.target[0].value });
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
          <input type="text" placeholder="소환사명, 소환사명, ..." />
        </div>
      </form>
      <button>클릭</button>
    </div>
  );
}
