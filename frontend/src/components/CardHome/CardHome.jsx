import React from "react";
import { Link } from "react-router-dom";
import "./CardHome.css";

function HomeComp() {
  return (
    <div className="home">
      <ul className="creat-log">
        <li className="li-home">
          <Link to="/CreateCount" className="list-creat-log">
            Créer un compte
          </Link>
        </li>
        <li>
          <Link to="/Login" className="list-creat-log">
            Connexion
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeComp;
