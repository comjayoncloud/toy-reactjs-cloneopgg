import React from "react";
import "../Css/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="TopBannerAd">
          <a href="https://ogt.gg/?&utm_source=opgg&utm_medium=display&utm_campaign=ogt_tierup&ad=opggtop">
            <img
              src="https://opgg-gnb.akamaized.net/static/images/banners/gnb_ogt@2x.png?image=q_auto,f_webp,w_1940&v=1666077951574"
              width="970"
              alt
              height="90"
            />
          </a>
          <button className="TopBannerAdClose">
            <img
              src="https://www.citypng.com/public/uploads/preview/transparent-white-square-close-x-button-icon-31631915367bsrspyjmhz.png"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div className="Game1">
          <h1>
            <a href="/">
              <img
                src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1666077951780"
                width="65"
                height="16"
              />
            </a>
          </h1>
          <nav>
            <ul>
              <li>
                <span>
                  <img
                    src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&amp;v=1666077951780"
                    width="24"
                    alt="리그오브레전드"
                    height="24"
                  />
                  <span>리그오브레전드</span>
                </span>
              </li>
              <li>
                <a>
                  <img
                    src="https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48&amp;v=1666077951780"
                    width="24"
                    alt="데스크톱"
                    height="24"
                  />
                  <span>데스크톱</span>
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&amp;v=1666077951780"
                    width="24"
                    alt="발로란트"
                    height="24"
                  />
                  <span>발로란트</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Game2">
          <nav></nav>
        </div>
      </div>
    );
  }
}
export default Header;
