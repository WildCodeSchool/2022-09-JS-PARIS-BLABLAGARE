import React from "react";
import "./CardResult.css";

function Result() {
  return (
    <div className="result-container">
      <div className="result-block1">
        <h2> Offres : </h2>
        <div className="resultOffres">
          <p> User </p>
        </div>
      </div>
      <div className="result-block2">
        <h2>Recherches :</h2>
        <div className="resultSearch">
          <p> User </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
