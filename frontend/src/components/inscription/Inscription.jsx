import React from "react";
import "./inscription.css";
import Button from "../Button/Button";

function Inscription() {
  return (
    <div className="inscription">
      <form>
        <label>
          Nom:
          <input id="firstName" type="text" name="firstName" />
        </label>
        <label>
          Prénom:
          <input id="lastName" type="text" name="lastName" />
        </label>
        <label>
          Email:
          <input id="email" type="email" name="email" />
        </label>
        <label>
          Pseudo:
          <input id="name" type="text" name="alias" />
        </label>
        <label>
          Mot de passe:
          <input id="mdp" type="password" name="name" />
        </label>
        <label>
          Confirmation:
          <input id="confMdp" type="password" name="name" />
        </label>
        <Button idButton="btn" champButton="Valider" type="submit" />
      </form>
    </div>
  );
}

export default Inscription;
