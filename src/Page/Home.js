import Header from "../Component/Header";
import Ad from "../Component/Ad";
import MainPage from "../Component/MainPage";

export default function Home() {
  console.log("home");
  return (
    <div className="Home">
      <Header />
      <Ad />
      <MainPage />
    </div>
  );
}
