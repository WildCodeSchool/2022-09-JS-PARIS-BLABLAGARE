import React, { useState } from "react";
import axios from "axios";
import Button from "../CardButton/CardButton";
import "./CardButtonDelete.css";

function ButtonDelete() {
  const [trips, setTrips] = useState([]);

  const deleteTrips = async (id) => {
    const response = await axios.delete(`http://localhost:5000/trips/${id}`);
    if (response.data.trips) {
      setTrips();
    }
  };

  return (
    <div>
      <Button
        idButton="btndelete"
        champButton="X"
        type="button"
        onClick={(e) => deleteTrips(trips.id, setTrips, e)}
      />
    </div>
  );
}

export default ButtonDelete;
