import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Covoit from "../../assets/covoit1.jpg";
import "./Home.css";
import HomeComp from "../../components/CardHome/CardHome";

export default function Home() {
  return (
    <>
      <Navbar acc="acc-home" compte="compte-home" />
      <div className="container-home">
        <div className="covoit">
          <img src={Covoit} alt="covoit" className="imgcovoit" />
        </div>
        <HomeComp />
      </div>
      <Background deconnect="deco-home" />
    </>
  );
}
