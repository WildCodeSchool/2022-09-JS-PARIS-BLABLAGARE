import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import Button from "../CardButton/CardButton";
import Input from "../CardInput/CardInput";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";

function CardResetPassword() {
  const { aliasUser } = useContext(UserContext);
  const alias = aliasUser.u_alias;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordConfIsVisible, setPasswordConfIsVisible] = useState(false);
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get("token");
  function killtoken() {
    fetch(
      "http://localhost:5000/users/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
      navigate("/")
    )
      .then((data) => {
        console.warn("DATA IN LOGOUT", data);
      })
      .catch((err) => console.error("ERR IN LOGOUT", err));
  }

  function validatePassword() {
    if (password !== confirmPassword) {
      setPasswordMessage("Mot de passe différent");
    } else {
      setPasswordMessage(null);
    }
  }
  const isConfirmPassword = password !== confirmPassword;
  const resetPassword = async (e, req) => {
    e.preventDefault();

    const user = {
      alias,
      password,
    };

    const config = { headers: { Authorization: `Bearer ${token}` } };

    const response = await axios.put(
      `http://localhost:5000/users`,
      user,
      config
    );
    setPassword("");
    setConfirmPassword("");
    killtoken();
  };

  return (
    <div className="resetPassword">
      <form>
        <Input
          className="input-mdp-reset label-mdp"
          type={passwordIsVisible ? "text" : "password"}
          champ="Mot de passe :"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="mdp1"
          autoComplete="on"
          placeholder="Mot de passe"
          minlength={6}
          required="required"
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
          className="input-mdp-reset label-conf"
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

        <Button
          disabled={isConfirmPassword}
          classButton="btn-resete"
          champButton="Valider"
          type="submit"
          onClick={resetPassword}
        />
      </form>
    </div>
  );
}

export default CardResetPassword;
