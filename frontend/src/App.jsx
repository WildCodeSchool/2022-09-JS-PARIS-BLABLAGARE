import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./Context/UserContext";
import UserOptionContext from "./Context/UserOptionContext";
import Home from "./pages/Home/Home";
import ValidateTrips from "./pages/Validatetrips/ValidateTrips";
import Login from "./pages/Login/Login";
import CreateCount from "./pages/CreateCount/CreateCount";
import Accueil from "./pages/Accueil/Accueil";
import UserChoice from "./pages/UserChoice/UserChoice";
import MyTrips from "./pages/MyTrips/MyTrips";
import Profile from "./pages/Profile/Profile";
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
                <Route path="/Login" element={<Login />} />
                <Route path="/CreateCount" element={<CreateCount />} />
                <Route path="/Accueil" element={<Accueil />} />
                <Route path="/UserChoice" element={<UserChoice />} />
                <Route
                  path="/MyTrips/:origin/:date/:hour"
                  element={<MyTrips />}
                />
                <Route path="/MyTrips/:id" element={<MyTrips />} />
                <Route path="/Profile" element={<Profile />} />
              </Routes>
            </div>
          </Router>
        </div>
      </UserOptionContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
