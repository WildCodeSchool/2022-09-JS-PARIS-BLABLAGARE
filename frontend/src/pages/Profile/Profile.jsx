import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import CardProfile from "../../components/CardUpdate/CardUpdate";
import "./Profile.css";

export default function updateProfil() {
  return (
    <>
      <Navbar />
      <CardProfile />
      <Background />
    </>
  );
}
