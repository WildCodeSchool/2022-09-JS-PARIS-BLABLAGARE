import React from "react";
import "./background.css";
import logo from "../../assets/logo.png";

function Background() {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <h3>
        Sans la sncf, <br />
        c'est toujours possible !
      </h3>
    </>
  );
}
export default Background;
