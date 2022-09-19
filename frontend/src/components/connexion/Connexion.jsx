import React from "react";
import "./connexion.css";

function Connexion() {
  return (
    <div className="connexion">
      <label>
        Pseudo: <br />
        <input id="name" type="text" name="alias" />
      </label>
      <label>
        Mot de passe:
        <input id="pass" type="password" name="name" />
      </label>
      <button id="btn" type="submit">
        Valider
      </button>
    </div>
  );
}

export default Connexion;
