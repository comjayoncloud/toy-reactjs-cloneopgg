import Header from "../Component/Header";
import MainPage from "../Component/MainPage";
import SubPage from "../Component/SubPage";
import "../Scss/Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <MainPage />
      <SubPage />
    </div>
  );
}
