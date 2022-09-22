import React, { useContext } from "react";
import "./CardConfirmation.css";
import UserOptionContext from "../../Context/UserOptionContext";

export default function Confirmation() {
  const { userOption, setUserOption } = useContext(UserOptionContext);
  return (
    <div className="confirmation">
      {(() => {
        switch (userOption) {
          case "Proposition":
            return (
              <>
                <p>Offre bien prise en compte.</p> <p>Merci User !</p>{" "}
              </>
            );
          case "Recherche":
            return (
              <>
                <p>Message envoyé.</p> <p>Merci User !</p>{" "}
              </>
            );
          case "Suppresion":
            return (
              <>
                <p>Annonce bien supprimée.</p> <p>Merci User !</p>{" "}
              </>
            );
          default:
            return null;
        }
      })()}
      ;
    </div>
  );
}
