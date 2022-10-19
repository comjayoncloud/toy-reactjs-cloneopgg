import React from "react";
import "../Css/MainPage.css";
class MainPage extends React.Component {
  render() {
    return (
      <div className="Mainpage">
        <div className="Logo">
          <img
            src="https://opgg-static.akamaized.net/logo/20221010045639.2625f6aece594c4fad77dcb70effe126.png?image=q_auto,f_webp,w_auto&v=1666077951780"
            alt="메인페이지 로고"
          />
        </div>
        <div className="SearchContainer">
          <form className="SearchForm">
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
      </div>
    );
  }
}
export default MainPage;
