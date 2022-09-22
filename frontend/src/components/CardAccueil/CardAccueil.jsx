import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import "./CardAccueil.css";
import { Link } from "react-router-dom";


export default function Accueil() {
  const { aliasUser } = useContext(UserContext);

  return (
    <div className="user">
      <h3>Bienvenue {aliasUser.u_alias} !</h3>

      <ul>
        <li>
        <Link to="UserChoise">Je propose un acheminement</Link>
        </li>
        <li>
        <Link to="UserChoise">Je recherche un acheminement</Link>
        </li>
        <li>
        <Link to="MyTrips">Voir mes acheminements</Link>
        </li>
      </ul>
    </div>
  );
}
