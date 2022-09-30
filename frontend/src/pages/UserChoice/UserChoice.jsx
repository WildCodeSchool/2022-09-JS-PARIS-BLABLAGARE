import React from "react";
import CardNavbar from "../../components/CardNavBar/CardNavbar";
import CardBackground from "../../components/CardBackground/CardBackground";
import CardChoise from "../../components/CardChoise/CardChoise";
import "./UserChoice.css";

export default function UserChoice() {
  return (
    <>
      <CardNavbar />
      <CardChoise />
      <CardBackground />
    </>
  );
}
