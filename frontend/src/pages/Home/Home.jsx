import Background from "../../components/background/Background";
import Navbar from "../../components/navBar/Navbar";
import Covoit from "../../assets/covoit1.jpg";
import "./Home.css";
import HomeComp from "../../components/HomeComp/HomeComp";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="covoit">
        <img src={Covoit} alt="covoit" className="imgcovoit" />
      </div>
      <HomeComp />
      <Background />
    </>
  );
}
