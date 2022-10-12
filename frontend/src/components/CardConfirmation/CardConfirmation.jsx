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
                <p className="text-conf">Offre bien prise en compte.</p>
                <p className="text-conf">Merci {aliasUser.u_alias} !</p>
              </>
            );
          case "recherche":
            return (
              <>
                <p className="text-conf">Message envoyé.</p>{" "}
                <p>Merci {aliasUser.u_alias} !</p>{" "}
              </>
            );
          case "suppresion":
            return (
              <>
                <p className="text-conf">Annonce bien supprimée.</p>
                <p className="text-conf">Merci {aliasUser.u_alias} !</p>
              </>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
