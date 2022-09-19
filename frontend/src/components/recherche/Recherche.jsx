import React from 'react';
import "./recherche.css";

const Recherche = () => {
    return (
        <div className="recherche">
            <div className="text">
            <h3>Bienvenue User!</h3>
            <h4>Acheminement recherché:</h4>
            <label for="gare-select">
        Depuis la gare de:
      </label>

      <select name="gare" id="dep"> 
      <option value="">Gare de:</option>
      <option value="gare1">Nantes</option>
      <option value="gare2">Brest</option>
      <option value="gare4">Strasbourg</option>
      <option value="gare5">Mulhouse</option>
      <option value="gare6">Metz</option>
      <option value="gare7">Perpignan</option>
      <option value="gare8">Frejus</option>
      <option value="gare9">Vierzon</option>
      <option value="gare10">Bayonne</option>
        </select>

      <label>
        Jusqu'à:
        <input id="arr1" type="text" name="name" placeholder='Choix1'/>
        <input id="arr2" type="text" name="name" placeholder='Choix2'/>
        <input id="arr3" type="text" name="name" placeholder='Choix3'/>
      </label>

      <div className="dateTime">

      <label for="date">Le:</label>        
        <input id="dated" type="date" name="trip-start" 
        value="2022-09-01" min="2022-01-01" max="2022-12-01"/>
      
      <label for="time">à:</label>        
        <input id="time" type="time" name="time" 
        min="00:00" max="23:59" required/>
        </div>

      <label>
        Commentaires:
        <textarea id="message" name="message" />
      </label>

      <button id="btn" type="submit">Valider</button>

      {/* <Button idButton="btn" champButton="Valider" type="submit" /> */}
      </div>
        </div>
    );
};

export default Recherche;