import React, { useContext } from "react";
import "./CardConfirmation.css";
import UserOptionContext from "../../Context/UserOptionContext";
import UserContext from "../../Context/UserContext";

export default function Confirmation() {
  const { userOption } = useContext(UserOptionContext);
  const { aliasUser } = useContext(UserContext);
  return (
    <div className="confirmation">
      {(() => {
        switch (userOption) {
          case "proposition":
            return (
              <>
                <p>Offre bien prise en compte.</p>{" "}
                <p>Merci {aliasUser.u_alias} !</p>{" "}
              </>
            );
          case "recherche":
            return (
              <>
                <p>Message envoyé.</p> <p>Merci {aliasUser.u_alias} !</p>{" "}
              </>
            );
          case "suppresion":
            return (
              <>
                <p>Annonce bien supprimée.</p>{" "}
                <p>Merci {aliasUser.u_alias} !</p>{" "}
              </>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
