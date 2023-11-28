import React from "react";
import classnames from "classnames";
import InputField from "./InputField";
import "./Resources.css";

const Resources = ({
  gold,
  wood,
  ore,
  mana,
  setGold,
  setWood,
  setOre,
  setMana,
  handleReset,
}) => {
  const type = {
    gold: "gold",
    wood: "wood",
    ore: "ore",
    mana: "mana",
  };

  const handleChange = (event, speedupType) => {
    const { name, value } = event.target;
    const newValue = Math.max(0, parseFloat(value) || 0);

    switch (speedupType) {
      case type.gold:
        setGold((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      case type.wood:
        setWood((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      case type.ore:
        setOre((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      case type.mana:
        setMana((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      default:
        break;
    }
  };

  const calculateTotalResources = (rssType, state) => {
    const total =
      (parseInt(state[rssType].k1) || 0) * 1000 +
      (parseInt(state[rssType].k10) || 0) * 10000 +
      (parseInt(state[rssType].k50) || 0) * 50000 +
      (parseInt(state[rssType].k150) || 0) * 150000 +
      (parseInt(state[rssType].k500) || 0) * 500000 +
      (parseInt(state[rssType].m1) || 0) * 1500000 +
      (parseInt(state[rssType].m5) || 0) * 5000000 +
      (parseInt(state[rssType].open) || 0) * 1;

    return total.toLocaleString("en-US");
  };

  const calculateOre = () => {
    const total =
      (parseInt(ore.k1) || 0) * 750 +
      (parseInt(ore.k10) || 0) * 7500 +
      (parseInt(ore.k50) || 0) * 37500 +
      (parseInt(ore.k150) || 0) * 112500 +
      (parseInt(ore.k500) || 0) * 375000 +
      (parseInt(ore.m1) || 0) * 1125000 +
      (parseInt(ore.m5) || 0) * 3750000 +
      (parseInt(ore.open) || 0) * 1;

    return total.toLocaleString("en-US");
  };

  const calculateMana = () => {
    const total =
      (parseInt(mana.k1) || 0) * 500 +
      (parseInt(mana.k10) || 0) * 3000 +
      (parseInt(mana.k50) || 0) * 15000 +
      (parseInt(mana.k150) || 0) * 50000 +
      (parseInt(mana.k500) || 0) * 200000 +
      (parseInt(mana.m1) || 0) * 600000 +
      (parseInt(mana.m5) || 0) * 2000000 +
      (parseInt(mana.open) || 0) * 1;

    return total.toLocaleString("en-US");
  };

  const totalGold = calculateTotalResources(type.gold, { gold });
  const totalWood = calculateTotalResources(type.wood, { wood });
  const totalOre = calculateOre();
  const totalMana = calculateMana();

  return (
    <div>
      <header>
        <h2>Resources</h2>
        <button className="resetBtn" onClick={handleReset}>
          Reset
        </button>
      </header>

      <div className="mainContainer">
        <div className="contentContainer">
          <section className={classnames("sectionContainer", "gold")}>
            <div className="sectionHeader">
              <h3>Gold</h3>
              <span className={"sectionTotal"}>({totalGold})</span>
            </div>
            <div className="sectionCard">
              <InputField
                label="Gathered"
                name="open"
                placeholder="Enter value"
                value={gold.open}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <br />
              <InputField
                label="1.000"
                name="k1"
                value={gold.k1}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <InputField
                label="10.000"
                name="k10"
                value={gold.k10}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <InputField
                label="50.000"
                name="k50"
                value={gold.k50}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <InputField
                label="150.000"
                name="k150"
                value={gold.k150}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <InputField
                label="500.000"
                name="k500"
                value={gold.k500}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <InputField
                label="1.500.000"
                name="m1"
                value={gold.m1}
                onChange={(e) => handleChange(e, type.gold)}
              />
              <InputField
                label="5.000.000"
                name="m5"
                value={gold.m5}
                onChange={(e) => handleChange(e, type.gold)}
              />
            </div>
          </section>

          <section className={classnames("sectionContainer", "wood")}>
            <div className="sectionHeader">
              <h3>Wood</h3>
              <span className={"sectionTotal"}>({totalWood})</span>
            </div>

            <div className="sectionCard">
              <InputField
                label="Gathered"
                name="open"
                placeholder="Enter value"
                value={wood.open}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="1.000"
                name="k1"
                value={wood.k1}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="10.000"
                name="k10"
                value={wood.k10}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="50.000"
                name="k50"
                value={wood.k50}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="150.000"
                name="k150"
                value={wood.k150}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="500.000"
                name="k500"
                value={wood.k500}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="1.500.000"
                name="m1"
                value={wood.m1}
                onChange={(e) => handleChange(e, type.wood)}
              />
              <InputField
                label="5.000.000"
                name="m5"
                value={wood.m5}
                onChange={(e) => handleChange(e, type.wood)}
              />
            </div>
          </section>

          <section className={classnames("sectionContainer", "ore")}>
            <div className="sectionHeader">
              <h3>Ore</h3>
              <span className={"sectionTotal"}>({totalOre})</span>
            </div>
            <div className="sectionCard">
              <InputField
                label="Gathered"
                name="open"
                placeholder="Enter value"
                value={ore.open}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="750"
                name="k1"
                value={ore.k1}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="7.500"
                name="k10"
                value={ore.k10}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="37.500"
                name="k50"
                value={ore.k50}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="112.500"
                name="k150"
                value={ore.k150}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="375.000"
                name="k500"
                value={ore.k500}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="1.125.000"
                name="m1"
                value={ore.m1}
                onChange={(e) => handleChange(e, type.ore)}
              />
              <InputField
                label="3.750.000"
                name="m5"
                value={ore.m5}
                onChange={(e) => handleChange(e, type.ore)}
              />
            </div>
          </section>

          <section className={classnames("sectionContainer", "mana")}>
            <div className="sectionHeader">
              <h3>Mana</h3>
              <span className={"sectionTotal"}>({totalMana})</span>
            </div>
            <div className="sectionCard">
              <InputField
                label="Gathered"
                name="open"
                placeholder="Enter value"
                value={mana.open}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="500"
                name="k1"
                value={mana.k1}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="3.000"
                name="k10"
                value={mana.k10}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="15.000"
                name="k50"
                value={mana.k50}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="50.000"
                name="k150"
                value={mana.k150}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="200.000"
                name="k500"
                value={mana.k500}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="600.000"
                name="m1"
                value={mana.m1}
                onChange={(e) => handleChange(e, type.mana)}
              />
              <InputField
                label="2.000.000"
                name="m5"
                value={mana.m5}
                onChange={(e) => handleChange(e, type.mana)}
              />
            </div>
          </section>
        </div>

        <div className="summaryContainer">
          <h3>Summary</h3>
          <span>
            <h4>Gold: </h4>
            {totalGold}
          </span>
          <br />
          <span>
            <h4>Wood: </h4>
            {totalWood}
          </span>
          <br />
          <span>
            <h4>Ore: </h4>
            {totalOre}
          </span>
          <br />
          <span>
            <h4>Mana: </h4>
            {totalMana}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resources;
