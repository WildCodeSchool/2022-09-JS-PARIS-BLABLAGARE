import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Connexion from "../../components/CardConnexion/CardConnexion";
import Covoit from "../../assets/covoit1.jpg";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Navbar acc="acc-login" compte="compte-login" />
      <div className="container-login">
        <div className="covoit2">
          <img src={Covoit} alt="covoit" className="imgcovoit" />
        </div>
        <Connexion />
      </div>

      <Background deconnect="deco-login" />
    </>
  );
}
