import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CardInscription.css";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";

function Inscription() {
  const navigate = useNavigate();
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [lenghtPassword, setLenghtPassword] = useState(null);
  const [inputMessage, setInputMessage] = useState({
    firstname: "",
    lastname: "",
    alias: "",
    email: "",
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    alias: "",
    password: "",
    confirmPassword: "",
  };

  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function check() {
    const keys = Object.keys(inputs);
    const emptyInputs = {};
    keys.forEach((key) => {
      if (inputs[key] === "") {
        emptyInputs[key] = `Le champ ${key} est vide`;
      } else {
        emptyInputs[key] = null;
      }
    });
    setInputMessage({
      ...emptyInputs,
    });
  }

  function inputValid() {
    let canChangePage = true;
    const arrayValues = Object.values(inputs);
    arrayValues.forEach((el) => {
      if (el === "") {
        canChangePage = false;
      }
      if (inputs.password.length < 6) {
        canChangePage = false;
      }
    });
    return canChangePage;
  }

  const sendData = (e) => {
    e.preventDefault();
    check();
    if (inputValid()) {
      axios.post(`http://localhost:5000/users`, inputs).then(() => {
        setInputs(initialValues);
        navigate("/Login");
      });
    }
  };

  function validatePassword() {
    if (inputs.password !== inputs.confirmPassword) {
      setPasswordMessage("Mot de passe différent");
    } else {
      setPasswordMessage(null);
    }
  }
  function minlength() {
    if (inputs.password.length < 6) {
      setLenghtPassword("6 caractéres minimum");
    } else {
      setLenghtPassword(null);
    }
  }
  const isConfirmPassword = inputs.password !== inputs.confirmPassword;

  return (
    <div className="inscription">
      <form>
        <Input
          forId="firstName"
          type="text"
          champ="Nom :"
          onChange={(e) => handleChange(e)}
          value={inputs.firstname}
          name="firstname"
          placeholder="Jean"
        />
        <span> {inputMessage.firstname}</span>
        <Input
          forId="lastName"
          type="text"
          champ="Prénom :"
          onChange={(e) => handleChange(e)}
          value={inputs.lastname}
          name="lastname"
          placeholder="Bon"
        />
        <span> {inputMessage.lastname}</span>
        <Input
          forId="name"
          type="text"
          champ="Pseudo :"
          onChange={(e) => handleChange(e)}
          value={inputs.alias}
          name="alias"
          placeholder="Babe"
        />
        <span> {inputMessage.alias}</span>
        <Input
          forId="mdp"
          type="password"
          champ="Mot de passe :"
          onChange={(e) => handleChange(e)}
          value={inputs.password}
          name="password"
          autoComplete="on"
          placeholder="Mot de passe"
          onBlur={() => minlength()}
        />
        {lenghtPassword !== null && <span> {lenghtPassword}</span>}
        <Input
          forId="confMdp"
          type="password"
          champ="Confirmation :"
          onChange={(e) => handleChange(e)}
          value={inputs.confirmPassword}
          onBlur={() => validatePassword()}
          name="confirmPassword"
          autoComplete="on"
          placeholder="Mot de passe"
        />
        {passwordMessage !== null && <span> {passwordMessage}</span>}
        <Input
          forId="email"
          type="email"
          champ="Email :"
          onChange={(e) => handleChange(e)}
          value={inputs.email}
          name="email"
          placeholder="jean_bon@herta.fr"
        />
        <span> {inputMessage.email}</span>
        <Button
          disabled={isConfirmPassword}
          idButton="btn"
          name="button"
          champButton="Valider"
          type="submit"
          onClick={(e) => {
            sendData(e);
          }}
        />
      </form>
    </div>
  );
}

export default Inscription;
