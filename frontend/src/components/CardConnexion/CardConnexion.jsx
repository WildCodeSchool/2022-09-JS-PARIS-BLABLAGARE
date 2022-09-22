import React, { useState, useContext } from "react";
import "./CardConnexion.css";
import axios from "axios";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";
import Accueil from "../CardAccueil/CardAccueil";
import UserContext from "../../Context/UserContext";

function Connexion() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  const [sucess, setSucess] = useState(false);
  const { setAliasUser } = useContext(UserContext);

  const postUserLogin = async (e) => {
    e.preventDefault();

    const data = {
      alias,
      password,
    };

    const response = await axios.post(
      `http://localhost:5000/users/login`,
      data
    );
    if (response.data) {
      setAliasUser(response.data.user);
      // console.warn(response.data.user);
    }
    setAlias("");
    setPassword("");
    setSucess(true);
  };
  return (
    <div>
      {sucess ? (
        <div>
          <Accueil />
        </div>
      ) : (
        <div className="connexion">
          <form>
            <Input
              forId="name"
              type="text"
              champ="Pseudo :"
              onChange={(e) => setAlias(e.target.value)}
              value={alias}
              name="alias"
              placeholder="Babe"
            />
            <Input
              forId="pass"
              type="password"
              champ="Mot de passe :"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="name"
              autoComplete="on"
              placeholder="Mot de passe"
            />
            <Button
              idButton="btn"
              champButton="Valider"
              type="submit"
              onClick={postUserLogin}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default Connexion;
