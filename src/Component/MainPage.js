import React from "react";
import "../Css/MainPage.css";
class MainPage extends React.Component {
  render() {
    return (
      <div className="Mainpage">
        <div className="Img">
          <img
            src="https://opgg-static.akamaized.net/logo/20221010045639.2625f6aece594c4fad77dcb70effe126.png?image=q_auto,f_webp,w_auto&v=1666077951780"
            alt="이미지"
          />
        </div>
        <div className="SearchContainer">
          <div>
            <form>
              <div>Region</div>
              <div>소환사명</div>
            </form>
            <button>클릭</button>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
