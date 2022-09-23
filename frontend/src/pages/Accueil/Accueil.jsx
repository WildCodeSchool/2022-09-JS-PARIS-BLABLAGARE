import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import CardAccueil from "../../components/CardAccueil/CardAccueil";
import "./Accueil.css";

export default function Accueil() {
  return (
    <>
      <Navbar />
      <CardAccueil />
      <Background />
    </>
  );
}
