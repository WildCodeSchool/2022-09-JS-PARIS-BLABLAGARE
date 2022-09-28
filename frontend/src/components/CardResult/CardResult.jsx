import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../CardButton/CardButton";
import "./CardResult.css";

function Result({ day, origin, hour }) {
  const token = sessionStorage.getItem("token");
  const [resultTrips, setResultTrips] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/trips/${origin}/${day}/${hour}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        console.warn(data);
        setResultTrips(data);
      });
  }, []);
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
                  {data.u_alias} propose le {data.day} à {data.t_hour} depuis{" "}
                  {data.t_origin} vers {data.t_dest1} {data.t_dest2}{" "}
                  {data.t_dest3}.
                </p>
              </div>
            ))}
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
                    type="submit"
                    champButton="Contacter"
                  />
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Result;
