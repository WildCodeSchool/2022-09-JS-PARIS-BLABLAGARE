import React from "react";
import { Link } from "react-router-dom";
import "./CardBackground.css";
import logo from "../../assets/logo.png";

function Background() {
  const logout = () => {
    // e.preventDefault();
    const token = sessionStorage.getItem("token");
    fetch("http://localhost:5000/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => {
        console.warn("DATA IN LOGOUT", data);
      })
      .catch((err) => console.error("ERR IN LOGOUT", err));
  };

  return (
    <div className="background">
      <button className="disconnect" onClick={logout}>
        <Link className="disconnect-link" to="/">
          Déconnecter
        </Link>
      </button>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
export default Background;
