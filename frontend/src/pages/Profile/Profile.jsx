import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import CardProfile from "../../components/CardUpdate/CardUpdate";
import Covoit from "../../assets/covoit1.jpg";
import "./Profile.css";

export default function updateProfil() {
  return (
    <>
      <Navbar />
      <div className="container-profile">
        <div className="covoit-profile">
          <img src={Covoit} alt="covoit" className="imgcovoit-profile" />
        </div>
        <CardProfile />
      </div>
      <Background />
    </>
  );
}
