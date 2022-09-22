import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import "./Accueil.css";

export default function Home() {
  const { aliasUser } = useContext(UserContext);

  return (
    <div className="user">
      <h3>Bienvenue {aliasUser.u_alias} !</h3>

      <ul>
        <li>Je propose un acheminement</li>
        <li>Je recherche un acheminement</li>
        <li>Voir mes acheminements</li>
      </ul>
    </div>
  );
}
