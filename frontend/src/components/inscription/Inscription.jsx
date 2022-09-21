import React, { useState } from "react";
import "./Inscription.css";
import postProfile from "../../services/AxiosUsers";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Inscription() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState(null);

  const data = {
    firstname,
    lastname,
    email,
    alias,
    password,
  };

  function validatePassword(e) {
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
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          name="firstName"
          placeholder="Jean"
        />
        <Input
          forId="lastName"
          type="text"
          champ="Prénom :"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
          name="lastName"
          placeholder="Bon"
        />
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
          forId="mdp"
          type="password"
          champ="Mot de passe :"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="mdp1"
          autoComplete="on"
          placeholder="Mot de passe"
        />
        <Input
          forId="confMdp"
          type="password"
          champ="Confirmation :"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          onBlur={() => validatePassword()}
          name="mdp2"
          autoComplete="on"
          placeholder="Mot de passe"
        />
        {passwordMessage !== null && <span> {passwordMessage}</span>}
        <Input
          forId="email"
          type="email"
          champ="Email :"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="jean_bon@herta.fr"
        />
        <Button
          disabled={isConfirmPassword}
          idButton="btn"
          champButton="Valider"
          type="submit"
          onClick={(e) =>
            postProfile(
              data,
              setFirstname,
              setLastName,
              setEmail,
              setAlias,
              setPassword,
              e
            )
          }
        />
      </form>
    </div>
  );
}

export default Inscription;
