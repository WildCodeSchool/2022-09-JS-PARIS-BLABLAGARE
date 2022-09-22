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
        <Link to="/">Home</Link>
      </li>
      <li>Mon compte</li>
    </ul>
  );
}

export default NavBar;
