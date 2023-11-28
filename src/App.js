import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import classnames from "classnames";
import Speedups from "./Speedups";
import Resources from "./Resources";
import "./App.css";

const App = () => {
  const initialSpeedupsState = {
    minutes1: "",
    minutes5: "",
    minutes10: "",
    minutes15: "",
    minutes30: "",
    minutes60: "",
    hours3: "",
    hours8: "",
    hours15: "",
    hours24: "",
    days3: "",
    days7: "",
    days30: "",
  };

  const initialResources = {
    k1: "",
    k10: "",
    k50: "",
    k150: "",
    k500: "",
    m1: "",
    m5: "",
    gathered: "",
  };

  const [building, setBuilding] = useState(initialSpeedupsState);
  const [training, setTraining] = useState(initialSpeedupsState);
  const [research, setResearch] = useState(initialSpeedupsState);
  const [universal, setUniversal] = useState(initialSpeedupsState);
  const [gold, setGold] = useState(initialResources);
  const [wood, setWood] = useState(initialResources);
  const [ore, setOre] = useState(initialResources);
  const [mana, setMana] = useState(initialResources);

  const resetSpeedups = () => {
    setBuilding(initialSpeedupsState);
    setTraining(initialSpeedupsState);
    setResearch(initialSpeedupsState);
    setUniversal(initialSpeedupsState);
  };

  const resetResources = () => {
    setGold(initialResources);
    setWood(initialResources);
    setOre(initialResources);
    setMana(initialResources);
    localStorage.removeItem("lsGold");
  };

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

          <div className="main">
            <h1>Items Calculator</h1>

            <Routes>
              <Route
                path="/"
                element={
                  <Speedups
                    building={building}
                    setBuilding={setBuilding}
                    training={training}
                    setTraining={setTraining}
                    research={research}
                    setResearch={setResearch}
                    universal={universal}
                    setUniversal={setUniversal}
                    handleReset={resetSpeedups}
                  />
                }
              />
              <Route
                path="/resources"
                element={
                  <Resources
                    gold={gold}
                    setGold={setGold}
                    wood={wood}
                    setWood={setWood}
                    ore={ore}
                    setOre={setOre}
                    mana={mana}
                    setMana={setMana}
                    handleReset={resetResources}
                  />
                }
              />
            </Routes>
          </div>

          <footer>
            Powered by <span>Maximiks</span>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
