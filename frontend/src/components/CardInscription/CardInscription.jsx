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
  const [errorInscription, setErrorInscription] = useState(false);
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
      axios
        .post(`http://localhost:5000/users`, inputs)
        .then(() => {
          setErrorInscription(false);
          setInputs(initialValues);
          navigate("/Login");
        })
        .catch((err) => {
          setErrorInscription(true);
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
      <form className="input-inscription">
        <Input
          forId="firstName"
          type="text"
          champ="Nom :"
          onChange={(e) => handleChange(e)}
          value={inputs.firstname}
          name="firstname"
          placeholder="Nom"
        />
        <p className="message-input"> {inputMessage.firstname}</p>
        <Input
          forId="lastName"
          type="text"
          champ="Prénom :"
          onChange={(e) => handleChange(e)}
          value={inputs.lastname}
          name="lastname"
          placeholder="Prénom"
        />
        <p className="message-input"> {inputMessage.lastname}</p>
        <Input
          forId="name"
          type="text"
          champ="Pseudo :"
          onChange={(e) => handleChange(e)}
          value={inputs.alias}
          name="alias"
          placeholder="Pseudo"
        />
        <p className="message-input"> {inputMessage.alias}</p>
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
        {lenghtPassword !== null && (
          <p className="message-input"> {lenghtPassword}</p>
        )}
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
        {passwordMessage !== null && (
          <p className="message-input"> {passwordMessage}</p>
        )}
        <Input
          forId="email"
          type="email"
          champ="Email :"
          onChange={(e) => handleChange(e)}
          value={inputs.email}
          name="email"
          placeholder="mail@exemple.fr"
        />
        <p className="message-input"> {inputMessage.email}</p>
        <Button
          disabled={isConfirmPassword}
          idButton="btn"
          classButton="button-inscription"
          name="button"
          champButton="Valider"
          type="submit"
          onClick={(e) => {
            sendData(e);
          }}
        />
        <p>
          {" "}
          {errorInscription === true ? "le pseudo ou l'email existe déja" : ""}
        </p>
      </form>
    </div>
  );
}

export default Inscription;
