import React from "react";
import "./navBar.css";
import logoSncf from "../../assets/LOGO_SNCF_GROUPE_RVB.png";

function navBar() {
  return (
    <nav>
      <ul>
        <a href="https://www.sncf.com/fr">
          <img src={logoSncf} className="logoSncf" alt="logoSncf" />
        </a>
      </ul>
    </nav>
  );
}
export default navBar;
