import React from "react";
import Background from "../../components/background/Background";
import Navbar from "../../components/navBar/Navbar";
import Inscription from "../../components/inscription/Inscription";
import "./createCount.css";

export default function createCount() {
  return (
    <>
      <Navbar />
      <Inscription />
      <Background />
    </>
  );
}
