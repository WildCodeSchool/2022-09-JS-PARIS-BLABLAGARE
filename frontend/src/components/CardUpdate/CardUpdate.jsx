import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./CardUpdate.css";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";

export default function CardUpdate() {
  const { aliasUser } = useContext(UserContext);
  const userId = aliasUser.u_id;
  const Firstname = aliasUser.u_firstname;
  const Lastname = aliasUser.u_lastname;
  const Email = aliasUser.u_email;
  const Alias = aliasUser.u_alias;

  const [firstname, setFirstName] = useState(Firstname);
  const [lastname, setLastName] = useState(Lastname);
  const [email, setEmail] = useState(Email);
  const [alias, setAlias] = useState(Alias);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordConfIsVisible, setPasswordConfIsVisible] = useState(false);

  const update = async (e) => {
    e.preventDefault();
    const user = {
      userId,
      firstname,
      lastname,
      email,
      alias,
      password,
    };

    const token = sessionStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    alert("Modification effectué avec succès");

    await axios.put(`http://localhost:5000/users/${userId}`, user, config);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAlias("");
    setPassword("");
    setConfirmPassword("");
  };

  const deleteUser = async () => {
    const token = sessionStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    await axios.delete(`http://localhost:5000/users/${userId}`, config);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAlias("");
    setPassword("");
    setConfirmPassword("");
  };

  function validatePassword() {
    if (password !== confirmPassword) {
      setPasswordMessage("Mot de passe différent");
    } else {
      setPasswordMessage(null);
    }
  }

  const isConfirmPassword = password !== confirmPassword;

  return (
    <div className="inscription">
      <form>
        <Input
          forId="firstName"
          type="text"
          champ="Nom :"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
          name="firstName"
          placeholder="firstName"
          required="required"
        />
        <Input
          forId="lastName"
          type="text"
          champ="Prénom :"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
          name="lastName"
          placeholder="lastName"
          required="required"
        />
        <Input
          forId="name"
          type="text"
          champ="Pseudo :"
          onChange={(e) => setAlias(e.target.value)}
          value={alias}
          name="alias"
          placeholder="alias"
          required="required"
        />
        <Input
          minLength={6}
          required="required"
          forId="mdp"
          type={passwordIsVisible ? "text" : "password"}
          champ="Mot de passe :"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="mdp1"
          autoComplete="on"
          placeholder="Mot de passe"
        />
        <span
          onClick={() => setPasswordIsVisible(!passwordIsVisible)}
          onKeyDown={() => setPasswordIsVisible(!passwordIsVisible)}
          role="button"
          aria-hidden="true"
          className="eye"
        >
          <img
            src={passwordIsVisible ? openEye : closeEye}
            alt={passwordIsVisible ? "Open Eye" : "Close Eye"}
          />
        </span>
        <Input
          forId="confMdp"
          type={passwordConfIsVisible ? "text" : "password"}
          champ="Confirmation :"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          onBlur={() => validatePassword()}
          name="mdp2"
          autoComplete="on"
          placeholder="Mot de passe"
          required="required"
        />
        <span
          onClick={() => setPasswordConfIsVisible(!passwordConfIsVisible)}
          onKeyDown={() => setPasswordConfIsVisible(!passwordConfIsVisible)}
          role="button"
          aria-hidden="true"
          className="eye"
        >
          <img
            src={passwordConfIsVisible ? openEye : closeEye}
            alt={passwordConfIsVisible ? "Open Eye" : "Close Eye"}
          />
        </span>
        {passwordMessage !== null && <span> {passwordMessage}</span>}
        <Input
          forId="email"
          type="email"
          champ="Email :"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="jean_bon@herta.fr"
          required="required"
        />
        <Button
          disabled={isConfirmPassword}
          idButton="btn"
          champButton="Valider"
          type="submit"
          onClick={update}
        />

        <button idButton="btnD" onClick={deleteUser}>
          <Link to="/">Supprimer</Link>
        </button>
      </form>
    </div>
  );
}
