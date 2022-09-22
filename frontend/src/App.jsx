import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ValidateTrips from "./pages/Validatetrips/ValidateTrips";
import UserContext from "./Context/UserContext";
import UserOptionContext from "./Context/UserOptionContext";
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
              </Routes>
            </div>
          </Router>
        </div>
      </UserOptionContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
