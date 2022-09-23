import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./CardAccueil.css";

export default function CardAccueil() {
  const { aliasUser } = useContext(UserContext);

  return (
    <div className="user">
      <h3>Bienvenue {aliasUser.u_alias} !</h3>

      <ul>
        <li>
          <Link to="UserChoice">Je propose un acheminement</Link>
        </li>
        <li>
          <Link to="UserChoice">Je recherche un acheminement</Link>
        </li>
        <li>
          <Link to="MyTrips">Voir mes acheminements</Link>
        </li>
      </ul>
    </div>
  );
}
