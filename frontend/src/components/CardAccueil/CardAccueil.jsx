import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import UserOptionContext from "../../Context/UserOptionContext";
import "./CardAccueil.css";

export default function CardAccueil() {
  const { aliasUser } = useContext(UserContext);
  const { setUserOption } = useContext(UserOptionContext);
  const [userId] = useState(aliasUser.u_id);

  return (
    <div className="user">
      <h3 className="welcome">Bienvenue {aliasUser.u_alias} !</h3>

      <ul>
        <li>
          <Link
            to={`/UserChoice/${userId}`}
            onClick={() => {
              setUserOption("proposition");
            }}
          >
            Je propose un acheminement
          </Link>
        </li>
        <li>
          <Link
            to={`/UserChoice/${userId}`}
            onClick={() => {
              setUserOption("recherche");
            }}
          >
            Je recherche un acheminement
          </Link>
        </li>
        <li>
          <Link
            to={`/MyTrips/${userId}`}
            onClick={() => {
              setUserOption("suppresion");
            }}
          >
            Voir mes acheminements
          </Link>
        </li>
      </ul>
    </div>
  );
}
