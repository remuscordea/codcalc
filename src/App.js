import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Speedups from "./Speedups";
import Resources from "./Resources";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="pageLayout">
        <nav>
          <ul>
            <li>
              <Link to="/">Speedups</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        <div className={"main"}>
          <h1>CoD Tools</h1>

          <Routes>
            <Route path="/" element={<Speedups />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
