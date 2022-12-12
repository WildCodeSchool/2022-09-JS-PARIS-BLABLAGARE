import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";

function Inscription() {
  const navigate = useNavigate();
  const [errorInscription, setErrorInscription] = useState(false);
  const [passwordRegex, setPasswordRegex] = useState(true);
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

  const regexPassword = (value) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-.:;,+!?*$@%_])([-.:;,+!?*$@%_\w]{8,})$/.test(
      value
    );
  };

  const passwordControle = () => {
    if (regexPassword(inputs.password)) {
      setPasswordRegex(true);
      return true;
    }
    setPasswordRegex(false);
    return false;
  };

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
    const dico = {
      lastname: "Nom",
      firstname: "Prenom",
      alias: "Pseudo",
      email: "Email",
    };

    keys.forEach((key) => {
      if (inputs[key] === "") {
        emptyInputs[key] = `Le champ ${dico[key]} est vide`;
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
      if (passwordControle(inputs.password) === false) {
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

  const isConfirmPassword = inputs.password !== inputs.confirmPassword;

  return (
    <div className="inscription">
      <form className="input-inscription">
        <Input
          forId="lastName"
          type="text"
          champ="Nom :"
          onChange={(e) => handleChange(e)}
          value={inputs.lastname}
          name="lastname"
          placeholder="Nom"
        />
        <p className="message-input"> {inputMessage.lastname}</p>
        <Input
          forId="firstName"
          type="text"
          champ="Prénom :"
          onChange={(e) => handleChange(e)}
          value={inputs.firstname}
          name="firstname"
          placeholder="Prénom"
        />
        <p className="message-input"> {inputMessage.firstname}</p>
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
        />
        <p className="message-input mdp-input">
          {passwordRegex === false
            ? "⚠️ le mot de passe doit contenir au minimum: une majuscule, une minuscule, un chiffre, un caractère spécial parmi : -.:;,+!?*$@%_ et doit contenir minimum 8 caractères"
            : ""}
        </p>
        <Input
          forId="confMdp"
          type="password"
          champ="Confirmation :"
          onChange={(e) => handleChange(e)}
          value={inputs.confirmPassword}
          name="confirmPassword"
          autoComplete="on"
          placeholder="Mot de passe"
        />

        <p className="message-input mdp-input">
          {isConfirmPassword === true
            ? "⚠️ Les deux mots de passe doivent être identiques"
            : ""}
        </p>

        <Input
          forId="email"
          type="email"
          champ="Email :"
          onChange={(e) => handleChange(e)}
          value={inputs.email}
          name="email"
          placeholder="Email@exemple.fr"
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
          {errorInscription === true ? "le pseudo ou l'email existe déja" : ""}
        </p>
      </form>
    </div>
  );
}

export default Inscription;
