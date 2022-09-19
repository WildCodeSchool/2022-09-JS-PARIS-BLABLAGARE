import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ValidateTrips from "./pages/ValidateTrips";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/ValidateTrips">ValidateTrips</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ValidateTrips" element={<ValidateTrips />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
