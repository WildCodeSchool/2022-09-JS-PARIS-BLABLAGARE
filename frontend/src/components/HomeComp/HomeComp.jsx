import React from "react";
import { Link } from "react-router-dom";
import "./HomeComp.css";

function HomeComp() {
  return (
    <div className="home">
      <ul>
        <Link to="/CreateCount">Créer un compte</Link>
        <Link to="/Login">Connexion</Link>
      </ul>
    </div>
  );
}

export default HomeComp;
