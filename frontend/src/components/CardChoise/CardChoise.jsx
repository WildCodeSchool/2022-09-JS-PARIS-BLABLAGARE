import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import UserOptionContext from "../../Context/UserOptionContext";
import Input from "../CardInput/CardInput";
import Button from "../CardButton/CardButton";
import "./CardChoise.css";

function Proposition() {
  const { aliasUser } = useContext(UserContext);
  const { userOption, setUserOption } = useContext(UserOptionContext);

  return (
    <div className="propositions">
      <div className="text">
        <h3> {aliasUser.u_alias} </h3>
        {(() => {
          switch (userOption) {
            case "Proposition":
              return <h4>Acheminement proposé:</h4>;
            case "Recherche":
              return <h4>Acheminement recherché:</h4>;
            default:
              return null;
          }
        })()}
        <label htmlFor="gare-select">Depuis la gare de:</label>

        <select name="gare" id="dep">
          <option value="">Gare de:</option>
          <option value="gare1">Nantes</option>
          <option value="gare2">Brest</option>
          <option value="gare4">Strasbourg</option>
          <option value="gare5">Mulhouse</option>
          <option value="gare6">Metz</option>
          <option value="gare7">Perpignan</option>
          <option value="gare8">Frejus</option>
          <option value="gare9">Vierzon</option>
          <option value="gare10">Bayonne</option>
        </select>

        <Input
          champ="Jusqu'à :"
          forId="arr1"
          type="text"
          name="name"
          placeholder="Choix1"
        />
        <Input forId="arr2" type="text" name="name" placeholder="Choix2" />
        <Input forId="arr3" type="text" name="name" placeholder="Choix3" />

        <div className="dateTime">
          <label htmlFor="date">Le:</label>
          <input id="dated" type="date" name="trip-start" min="2022-01-01" />

          <label htmlFor="time">à:</label>
          <Input
            forId="time"
            type="time"
            name="time"
            min="00:00"
            max="23:59"
            required
          />
        </div>

        <label>
          Commentaires:
          <textarea id="message" name="message" />
        </label>
        {userOption === "Proposition" ? (
          <Link to="/ValidateTrips">
            <Button idButton="btn" type="submit" champButton="Valider" />
          </Link>
        ) : (
          <Link to="/">
            <Button idButton="btn" type="submit" champButton="Valider" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Proposition;
