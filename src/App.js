import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import classnames from "classnames";
import Speedups from "./Speedups";
import Resources from "./Resources";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className={classnames("pageLayout", "overlay")}>
        <div className="pageContent">
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
            <h1>Call of Dragons Calculator</h1>

            <Routes>
              <Route path="/" element={<Speedups />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
