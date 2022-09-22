import React from "react";
import "./CardBackground.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


function Background() {
  return (
    <div className="background">
      <h4>
      <Link to="/">Déconnecter</Link>
      </h4>
      <h3>
        Sans la sncf, <br />
        c'est toujours possible !
      </h3>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
export default Background;
