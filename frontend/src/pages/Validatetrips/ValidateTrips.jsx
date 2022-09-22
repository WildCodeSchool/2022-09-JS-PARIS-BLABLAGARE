import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Pictureback from "../../components/CardPictureBack/CardPictureback";
import Confirmation from "../../components/CardConfirmation/CardConfirmation";
import Navbar from "../../components/CardNavBar/CardNavbar";
import "./Validatetrips.css";

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
