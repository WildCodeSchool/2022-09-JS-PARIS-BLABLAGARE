import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CardConnexion.css";
import axios from "axios";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";
import UserContext from "../../Context/UserContext";

function Connexion() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAliasUser } = useContext(UserContext);

  const sendMailpassword = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/forgotPassword/${alias}`);
  };

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
      // console.log("dataaaaaaaa", data)
      const { token } = response.data;
      sessionStorage.setItem("token", token);
      setAliasUser(response.data.user);
      console.warn(response.data);
    }
    setAlias("");
    setPassword("");
    navigate("/Accueil");
  };

  return (
    <div className="connexion">
      <form className="form-input ">
        <Input
          className="input-login"
          type="text"
          champ="Pseudo :"
          onChange={(e) => setAlias(e.target.value)}
          value={alias}
          name="alias"
          placeholder="Babe"
        />
        <Input
          className="input-login"
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
          classButton="btn-reset"
          idButton="btn"
          champButton="Mot de passe oublié"
          type="submit"
          onClick={sendMailpassword}
        />
        <Button
          classButton="btn-login"
          idButton="btn"
          champButton="Valider"
          type="submit"
          onClick={postUserLogin}
        />
      </form>
    </div>
  );
}

export default Connexion;
