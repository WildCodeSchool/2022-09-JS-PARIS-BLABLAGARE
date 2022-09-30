import React from "react";
import "./CardNavBar.css";
import { Link } from "react-router-dom";
import logoSncf from "../../assets/LOGO_SNCF_GROUPE_RVB.png";

function NavBar() {
  return (
    <ul className="nav">
      <a href="https://www.sncf.com/fr">
        <img src={logoSncf} className="logoSncf" alt="logoSncf" />
      </a>
      <li>
        <Link to="/Accueil">Accueil</Link>
      </li>
      <li>
        <Link to="/Profile">Mon compte</Link>
      </li>
    </ul>
  );
}

export default NavBar;
