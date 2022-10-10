import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../CardButton/CardButton";
import UserOptionContext from "../../Context/UserOptionContext";
import UserContext from "../../Context/UserContext";

import "./CardResult.css";

function Result({ id, origin, day, hour }) {
  const token = sessionStorage.getItem("token");
  const { userOption } = useContext(UserOptionContext);
  const { aliasUser } = useContext(UserContext);
  const [resultTrips, setResultTrips] = useState([]);

  const url = () => {
    switch (userOption) {
      case "recherche":
        return `http://localhost:5000/trips/${id}/${origin}/${day}/${hour}`;
      case "suppresion":
        return `http://localhost:5000/trips/${id}`;
      default:
        return null;
    }
  };

  useEffect(() => {
    axios
      .get(url(), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)

      .then((data) => {
        setResultTrips(data);
      });
  }, []);

  const deleteTrips = (tripsId) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`http://localhost:5000/trips/${tripsId}`, config)
      .then(() => setResultTrips);
  };

  const sendMail = async (mail) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(
      `http://localhost:5000/send`,
      { senderEmail: aliasUser.u_email, receiverEmail: mail },
      config
    );
  };

  return (
    <div className="result-container">
      <div className="result-block1">
        <h2> Offres : </h2>
        {resultTrips &&
          resultTrips
            .filter((data) => data.t_search === 0)
            .map((data) => (
              <div className="resultOffres" key={data.t_id}>
                <p>
                  {data.u_alias} propose le {data.day} à {data.t_hour} depuis
                  {data.t_origin} vers {data.t_dest1} {data.t_dest2}
                  {data.t_dest3}.
                </p>
                <Link to="/ValidateTrips">
                  <Button
                    idButton="btn"
                    type="button"
                    champButton={
                      userOption === "recherche" ? "Contacter" : "Supprimer"
                    }
                    onClick={
                      userOption === "recherche"
                        ? () => sendMail(data.u_email)
                        : () => deleteTrips(data.t_id)
                    }
                  />
                </Link>
              </div>
            ))}
        {resultTrips &&
          resultTrips.filter((data) => data.t_search === 0).length === 0 &&
          userOption === "recherche" && (
            <p>Aucune offre ne correspond à votre demande.</p>
          )}
      </div>
      <div className="result-block2">
        <h2>Recherches :</h2>
        {resultTrips &&
          resultTrips
            .filter((data) => data.t_search === 1)
            .map((data) => (
              <div className="resultSearch" key={data.t_id}>
                <p>
                  {data.u_alias} recherche le {data.day} à {data.t_hour} depuis{" "}
                  {data.t_origin} vers {data.t_dest1} {data.t_dest2}{" "}
                  {data.t_dest3}.
                </p>
                <Link to="/ValidateTrips">
                  <Button
                    idButton="btn"
                    type="button"
                    champButton={
                      userOption === "recherche" ? "Contacter" : "Supprimer"
                    }
                    onClick={
                      userOption === "recherche"
                        ? () => sendMail(data.u_email)
                        : () => deleteTrips(data.t_id)
                    }
                  />
                </Link>
              </div>
            ))}
        {resultTrips &&
          resultTrips.filter((data) => data.t_search === 1).length === 0 &&
          userOption === "recherche" && (
            <p>Aucune offre ne correspond à votre demande.</p>
          )}
      </div>
    </div>
  );
}

export default Result;
