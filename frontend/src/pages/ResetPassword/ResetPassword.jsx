import React from "react";
import Background from "../../components/CardBackground/CardBackground";
import Navbar from "../../components/CardNavBar/CardNavbar";
import CardResetPassword from "../../components/CardResetPassword/CardResetPassword";
import "./ResetPassword.css";

export default function ResetPassword() {
  return (
    <div className="ResetPassword">
      <Navbar acc="acc-home" compte="compte-home" />
      <CardResetPassword />
      <Background deconnect="deco-home" />
    </div>
  );
}
