import React from "react";
import "./background.css";
import logo from "../../assets/logo.png";

function Background() {
  return (
    <div className="background">
      <h4>Déconnecter</h4>
      <h3>
        Sans la sncf, <br />
        c'est toujours possible !
      </h3>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
export default Background;
