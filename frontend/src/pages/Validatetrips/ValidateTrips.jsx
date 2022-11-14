import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Confirmation from "../../components/CardConfirmation/CardConfirmation";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Covoit from "../../assets/covoit1.jpg";
import "./Validatetrips.css";

export default function ValidateTrips() {
  return (
    <div className="validateTrips">
      <Navbar />
      <div className="container-valide">
        <div className="covoit3">
          <img src={Covoit} alt="covoit" className="imgcovoit" />
        </div>
        <Confirmation />
      </div>
      <Background />
    </div>
  );
}
