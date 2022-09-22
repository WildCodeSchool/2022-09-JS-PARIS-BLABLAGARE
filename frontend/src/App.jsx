import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./Context/UserContext";
import UserOptionContext from "./Context/UserOptionContext";
import Home from "./pages/Home/Home";
import ValidateTrips from "./pages/Validatetrips/ValidateTrips";
import Proposition from "./components/CardChoise/CardChoise";
import Login from "./pages/Login/Login";
import CreateCount from "./pages/CreateCount/CreateCount";
import Accueil from "./pages/Accueil/Accueil";
import "./App.css";

function App() {
  const [aliasUser, setAliasUser] = useState([]);
  const [userOption, setUserOption] = useState("");

  return (
    <UserContext.Provider value={{ aliasUser, setAliasUser }}>
      <UserOptionContext.Provider value={{ userOption, setUserOption }}>
        <div className="App">
          <Router>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ValidateTrips" element={<ValidateTrips />} />
                <Route path="/Proposition" element={<Proposition />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/CreateCount" element={<CreateCount />} />
                <Route path="/Accueil" element={<Accueil />} />
              </Routes>
            </div>
          </Router>
        </div>
      </UserOptionContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
