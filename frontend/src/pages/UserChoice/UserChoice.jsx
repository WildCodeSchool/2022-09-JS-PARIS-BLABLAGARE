import React from "react";
import CardNavbar from "../../components/CardNavBar/CardNavbar";
import CardBackground from "../../components/CardBackground/CardBackground";
import CardChoise from "../../components/CardChoise/CardChoise";
import Covoit from "../../assets/covoit1.jpg";
import "./UserChoice.css";

export default function UserChoice() {
  return (
    <>
      <CardNavbar />
      <div className="container-trips">
        <div className="covoit-trips">
          <img src={Covoit} alt="covoit" className="imgcovoit-trips" />
        </div>
        <CardChoise />
      </div>
      <CardBackground />
    </>
  );
}
