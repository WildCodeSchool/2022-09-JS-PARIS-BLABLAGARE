import React from "react";
import Background from "../components/background/Background";
import Pictureback from "../components/picture/Picture";
import Confirmation from "../components/confirmation/Confirmation";
import Navbar from "../components/navBar/Navbar";
import "./validatetrips.css";

export default function ValidateTrips() {
  return (
    <div className="validateTrips">
      <Navbar />
      <Confirmation />
      <Pictureback />
      <Background />
    </div>
  );
}
