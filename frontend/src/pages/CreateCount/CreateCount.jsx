import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Inscription from "../../components/CardInscription/CardInscription";
import Covoit from "../../assets/covoit1.jpg";
import "./createCount.css";

export default function createCount() {
  return (
    <>
      <Navbar />
      <div className="container-inscription">
        <div className="covoit-inscription">
          <img src={Covoit} alt="covoit" className="imgcovoit-inscription" />
        </div>
        <Inscription />
      </div>
      <Background />
    </>
  );
}
