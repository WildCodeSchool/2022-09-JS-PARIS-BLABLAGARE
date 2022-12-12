import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./CardUpdate.css";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";

export default function CardUpdate() {
  const navigate = useNavigate();

  const { aliasUser } = useContext(UserContext);
  const id = aliasUser.u_id;
  const firstnameDefault = aliasUser.u_firstname;
  const lastnameDefault = aliasUser.u_lastname;
  const emailDefault = aliasUser.u_email;
  const aliasDefault = aliasUser.u_alias;

  const [firstname, setFirstName] = useState(firstnameDefault);
  const [lastname, setLastName] = useState(lastnameDefault);
  const [email, setEmail] = useState(emailDefault);
  const [alias, setAlias] = useState(aliasDefault);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordConfIsVisible, setPasswordConfIsVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errorUpdate, setErrorUpdate] = useState(false);

  const isConfirmPassword = password !== confirmPassword;

  const user = {
    id,
    firstname,
    lastname,
    email,
    alias,
    password,
  };

  function checkFirstName() {
    if (firstname !== "") {
      return true;
    }
    return false;
  }

  function checkLastName() {
    if (lastname !== "") {
      return true;
    }
    return false;
  }

  function checkEmail() {
    if (email !== "") {
      return true;
    }
    return false;
  }

  function checkAlias() {
    if (alias !== "") {
      return true;
    }
    return false;
  }

  function checkPassword() {
    if (password !== "") {
      return true;
    }
    return false;
  }

  function checkConfirmPassword() {
    if (confirmPassword !== "") {
      return true;
    }
    return false;
  }

  const nav = () => {
    navigate("/Accueil");
  };

  const tempoNav = () => {
    setTimeout(nav, 2000);
  };

  const update = (e) => {
    e.preventDefault();

    if (
      checkFirstName() === true &&
      checkLastName() === true &&
      checkEmail() === true &&
      checkAlias() === true &&
      checkPassword() === true &&
      checkConfirmPassword() === true
    ) {
      const token = sessionStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .put(`http://localhost:5000/users/${id}`, user, config)
        .then(() => {
          setErrorUpdate(false);
          setSuccess(true);
          tempoNav();
        })
        .catch((err) => {
          setErrorUpdate(true);
        });
    }
  };

  const navDel = () => {
    navigate("/");
  };

  const tempoNavDel = () => {
    setTimeout(navDel, 2000);
  };

  const deleteUser = async () => {
    const token = sessionStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const res = await axios
      .delete(`http://localhost:5000/users/${id}`, config)
      .then(() => {
        tempoNavDel();
        setSuccess(true);
      });
  };

  return (
    <div className="update">
      <form className="input-update">
        <Input
          forId="firstName"
          type="text"
          champ="Nom :"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
          name="firstName"
          required="required"
        />
        <p className="message-input">
          {firstname === "" ? " Veuillez entrer un nom" : ""}
        </p>
        <Input
          forId="lastName"
          type="text"
          champ="Prénom :"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
          name="lastName"
          required="required"
        />
        <p className="message-input">
          {lastname === "" ? " Veuillez entrer un prénom " : ""}
        </p>
        <Input
          forId="name"
          type="text"
          champ="Pseudo :"
          onChange={(e) => setAlias(e.target.value)}
          value={alias}
          name="alias"
          required="required"
        />
        <p className="message-input">
          {alias === "" ? " Veuillez entrer un pseudo" : ""}
        </p>
        <Input
          minLength={6}
          required="required"
          forId="mdp"
          type={passwordIsVisible ? "text" : "password"}
          champ="Mot de passe :"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
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
        <p className="message-input">
          {password === "" ? " Veuillez entrer un mot de passe " : ""}
        </p>

        <Input
          forId="confMdp"
          type={passwordConfIsVisible ? "text" : "password"}
          champ="Confirmation :"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          name="confirmPassword"
          autoComplete="on"
          required="required"
        />
        <p>
          {isConfirmPassword === true ? "attention mot de passe different" : ""}
        </p>
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
        <Input
          forId="email"
          type="email"
          champ="Email :"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required="required"
        />
        <p className="message-input">
          {email === "" ? " Veuillez entrer une adresse mail " : ""}
        </p>
        <Button
          disabled={isConfirmPassword}
          idButton="btn"
          classButton="btnUpdate"
          champButton="Modifier"
          type="submit"
          onClick={(e) => update(e)}
        />
        <p>{success === true ? "Modification effectué avec succes" : ""}</p>
        <p> {errorUpdate === true ? "le pseudo ou l'email existe déja" : ""}</p>
        <Link to="/">
          <Button
            idButton="btn"
            classButton="btnDelete"
            champButton="Supprimer"
            type="submit"
            onClick={deleteUser}
          />
        </Link>
        <p>{success === true ? "Compte supprimé avec succes" : ""}</p>
      </form>
    </div>
  );
}
