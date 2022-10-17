import React from "react";
import "./CardNavBar.css";
import { Link } from "react-router-dom";
import logoSncf from "../../assets/LOGO_SNCF.png";

function NavBar({ acc, compte }) {
  return (
    <div className="navbar">
      <a href="https://www.sncf.com/fr">
        <img src={logoSncf} className="logoSncf" alt="logoSncf" />
      </a>
      <ul className="link">
        <li className="accueil">
          <Link className={`link-navbar ${acc}`} to="/Accueil">
            Accueil
          </Link>
        </li>
        <li className="profile">
          <Link className={`link-navbar ${compte}`} to="/Profile">
            Mon compte
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
