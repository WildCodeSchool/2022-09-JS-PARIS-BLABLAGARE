import React from "react";
import "./CardNavBar.css";
import { Link } from "react-router-dom";
import logoSncf from "../../assets/LOGO_SNCF.png";

function NavBar() {
  return (
    <div className="navbar">
      <a href="https://www.sncf.com/fr">
        <img src={logoSncf} className="logoSncf" alt="logoSncf" />
      </a>
      <ul className="link">
        <li className="accueil">
          <Link to="/Accueil">Accueil</Link>
        </li>
        <li className="profile">
          <Link to="/Profile">Mon compte</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
