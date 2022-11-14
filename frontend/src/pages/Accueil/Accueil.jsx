import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import CardAccueil from "../../components/CardAccueil/CardAccueil";
import Covoit from "../../assets/covoit1.jpg";
import "./Accueil.css";

export default function Accueil() {
  return (
    <>
      <Navbar acc="acc-accueil" />
      <div className="container-accueil">
        <div className="covoit3">
          <img src={Covoit} alt="covoit" className="imgcovoit" />
        </div>
        <CardAccueil />
      </div>
      <Background />
    </>
  );
}
