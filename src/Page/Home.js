import Header from "../Component/Header";
import MainPage from "../Component/MainPage";
import "../Css/Home.scss";

export default function Home() {
  // console.log("home");
  return (
    <div className="Home">
      <Header />
      <MainPage />
    </div>
  );
}
