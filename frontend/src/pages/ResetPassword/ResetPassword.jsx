import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Pictureback from "../../components/CardPictureBack/CardPictureback";
import Navbar from "../../components/CardNavBar/CardNavbar";
import CardResetPassword from "../../components/CardResetPassword/CardResetPassword";

export default function ResetPassword() {
  return (
    <div className="ResetPassword">
      <Navbar />
      <CardResetPassword />
      <Pictureback />
      <Background />
    </div>
  );
}
