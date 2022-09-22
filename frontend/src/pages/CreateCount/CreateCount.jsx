import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import Inscription from "../../components/CardInscription/CardInscription";
import "./CreateCount.css";

export default function createCount() {
  return (
    <>
      <Navbar />
      <Inscription />
      <Background />
    </>
  );
}
