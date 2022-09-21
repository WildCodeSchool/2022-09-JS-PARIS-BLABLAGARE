import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Home() {
  const { aliasUser } = useContext(UserContext);

  return (
    <header className="App-header">
      <h1 className="App-title"> hola {aliasUser.u_alias} </h1>
    </header>
  );
}
