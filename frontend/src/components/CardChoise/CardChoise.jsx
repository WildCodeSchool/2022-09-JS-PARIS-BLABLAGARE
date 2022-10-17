import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import UserOptionContext from "../../Context/UserOptionContext";
import Input from "../CardInput/CardInput";
import Button from "../CardButton/CardButton";
import postTrips from "../../services/AxiosTrips";
import "./CardChoise.css";

function Proposition() {
  const { aliasUser } = useContext(UserContext);
  const { userOption } = useContext(UserOptionContext);
  const [search, setSearch] = useState(userOption !== "proposition");
  const [origin, setOrigin] = useState();
  const [dest1, setDest1] = useState();
  const [dest2, setDest2] = useState();
  const [dest3, setDest3] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [comments, setComments] = useState();
  const [usersId, setUsersId] = useState(aliasUser.u_id);
  const navigate = useNavigate();
  const data = {
    search,
    origin,
    dest1,
    dest2,
    dest3,
    date,
    hour,
    comments,
    usersId,
  };
  function verifdest1() {
    if (setDest1 !== "") {
      return true;
    }
    return false;
  }
  function verifdate() {
    if (setDate !== "") {
      return true;
    }
    return false;
  }
  function verifhour() {
    if (setHour !== "") {
      return true;
    }
    return false;
  }
  function handleChange() {
    if (verifdest1 === true && verifdate === true && verifhour === true) {
      return (e) =>
        postTrips(
          data,
          setSearch,
          setOrigin,
          setDest1,
          setDest2,
          setDest3,
          setDate,
          setHour,
          setComments,
          setUsersId,
          e,
          navigate(`/Mytrips/${usersId}/${origin}/${date}/${hour}`)
        );
    }
    return null;
  }

  return (
    <div className="propositions">
      <div className="text">
        <form>
          <div className="propo-choise">
            <h3 className="alias"> Bienvenue {aliasUser.u_alias} !</h3>
            {(() => {
              switch (userOption) {
                case "proposition":
                  return (
                    <h4 className="propo-search">Acheminement proposé :</h4>
                  );
                case "recherche":
                  return (
                    <h4 className="propo-search">Acheminement recherché :</h4>
                  );
                default:
                  return null;
              }
            })()}
          </div>
          <div className="gare-select">
            <label htmlFor="gare-select">Depuis la gare de:</label>

            <select
              name="gare"
              id="dep"
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="">Gare de:</option>
              <option value="Nantes">Nantes</option>
              <option value="Brest">Brest</option>
              <option value="Strasbourg">Strasbourg</option>
              <option value="Mulhouse">Mulhouse</option>
              <option value="Metz">Metz</option>
              <option value="Perpignan">Perpignan</option>
              <option value="Frejus">Frejus</option>
              <option value="Vierzon">Vierzon</option>
              <option value="Bayonne">Bayonne</option>
            </select>
          </div>

          <Input
            className="input-choise"
            champ="Jusqu'à :"
            forId="arr1"
            type="text"
            name="name"
            placeholder="Choix1"
            onChange={(e) => setDest1(e.target.value)}
            required
          />
          <Input
            className="input-choise"
            forId="arr2"
            type="text"
            name="name"
            placeholder="Choix2"
            onChange={(e) => setDest2(e.target.value)}
          />
          <Input
            className="input-choise"
            forId="arr3"
            type="text"
            name="name"
            placeholder="Choix3"
            onChange={(e) => setDest3(e.target.value)}
          />

          <div className="dateTime">
            <label htmlFor="date">Le:</label>
            <Input
              forId="dated"
              type="date"
              name="trip-start"
              min="2022-01-01"
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="time">à:</label>
            <Input
              forId="time"
              type="time"
              name="time"
              min="00:00"
              max="23:59"
              onChange={(e) => setHour(e.target.value)}
              required
            />
          </div>

          <label>
            Commentaires:
            <textarea
              id="message"
              name="message"
              onChange={(e) => setComments(e.target.value)}
            />
          </label>
          {(() => {
            switch (userOption) {
              case "recherche":
                return (
                  <Button
                    idButton="btn"
                    type="submit"
                    champButton="Valider"
                    onClick={handleChange()}
                  />
                );
              case "proposition":
                return (
                  <Button
                    idButton="btn"
                    type="submit"
                    champButton="Valider"
                    onClick={handleChange()}
                  />
                );
              default:
                return null;
            }
          })()}
        </form>
      </div>
    </div>
  );
}

export default Proposition;
