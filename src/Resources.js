import React, { useState } from "react";
import classnames from "classnames";
import InputField from "./InputField";
import "./Resources.css";

const Resources = () => {
  const type = {
    gold: "gold",
    wood: "wood",
    ore: "ore",
    mana: "mana",
  };
  const initialResources = {
    k1: "",
    k10: "",
    k50: "",
    k150: "",
    k500: "",
    m1: "",
    m5: "",
    open: "",
  };
  const [gold, setGold] = useState(initialResources);
  const [wood, setWood] = useState(initialResources);
  const [ore, setOre] = useState(initialResources);
  const [mana, setMana] = useState(initialResources);

  const handleReset = () => {
    setGold(initialResources);
    setWood(initialResources);
    setOre(initialResources);
    setMana(initialResources);
  };

  const handleResources = (event, speedupType) => {
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
        <h2>Resources calculator</h2>
        <button className="resetBtn" onClick={handleReset}>
          Reset
        </button>
      </header>

      <div className="rssContainer">
        <article className={classnames("rssArticle", "gold")}>
          <h3>Gold</h3>
          <section className="rssSection">
            <InputField
              label="Gathered"
              name="open"
              placeholder="Enter value"
              value={gold.open}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="1.000"
              name="k1"
              value={gold.k1}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="10.000"
              name="k10"
              value={gold.k10}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="50.000"
              name="k50"
              value={gold.k50}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="150.000"
              name="k150"
              value={gold.k150}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="500.000"
              name="k500"
              value={gold.k500}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="1.500.000"
              name="m1"
              value={gold.m1}
              onChange={(e) => handleResources(e, type.gold)}
            />
            <InputField
              label="5.000.000"
              name="m5"
              value={gold.m5}
              onChange={(e) => handleResources(e, type.gold)}
            />
          </section>
          <span className={"sectionTotal"}>{`Total: ${totalGold}`}</span>
        </article>

        <article className={classnames("rssArticle", "wood")}>
          <h3>Wood</h3>
          <section className="rssSection">
            <InputField
              label="Gathered"
              name="open"
              placeholder="Enter value"
              value={wood.open}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="1.000"
              name="k1"
              value={wood.k1}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="10.000"
              name="k10"
              value={wood.k10}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="50.000"
              name="k50"
              value={wood.k50}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="150.000"
              name="k150"
              value={wood.k150}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="500.000"
              name="k500"
              value={wood.k500}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="1.500.000"
              name="m1"
              value={wood.m1}
              onChange={(e) => handleResources(e, type.wood)}
            />
            <InputField
              label="5.000.000"
              name="m5"
              value={wood.m5}
              onChange={(e) => handleResources(e, type.wood)}
            />
          </section>
          <span className={"sectionTotal"}>{`Total: ${totalWood}`}</span>
        </article>

        <article className={classnames("rssArticle", "ore")}>
          <h3>Ore</h3>
          <section className="rssSection">
            <InputField
              label="Gathered"
              name="open"
              placeholder="Enter value"
              value={ore.open}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="750"
              name="k1"
              value={ore.k1}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="7.500"
              name="k10"
              value={ore.k10}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="37.500"
              name="k50"
              value={ore.k50}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="112.500"
              name="k150"
              value={ore.k150}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="375.000"
              name="k500"
              value={ore.k500}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="1.125.000"
              name="m1"
              value={ore.m1}
              onChange={(e) => handleResources(e, type.ore)}
            />
            <InputField
              label="3.750.000"
              name="m5"
              value={ore.m5}
              onChange={(e) => handleResources(e, type.ore)}
            />
          </section>
          <span className={"sectionTotal"}>{`Total: ${totalOre}`}</span>
        </article>

        <article className={classnames("rssArticle", "mana")}>
          <h3>Mana</h3>
          <section className="rssSection">
            <InputField
              label="Gathered"
              name="open"
              placeholder="Enter value"
              value={mana.open}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="500"
              name="k1"
              value={mana.k1}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="3.000"
              name="k10"
              value={mana.k10}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="15.000"
              name="k50"
              value={mana.k50}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="50.000"
              name="k150"
              value={mana.k150}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="200.000"
              name="k500"
              value={mana.k500}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="600.000"
              name="m1"
              value={mana.m1}
              onChange={(e) => handleResources(e, type.mana)}
            />
            <InputField
              label="2.000.000"
              name="m5"
              value={mana.m5}
              onChange={(e) => handleResources(e, type.mana)}
            />
          </section>
          <span className={"sectionTotal"}>{`Total: ${totalMana}`}</span>
        </article>
      </div>
      <div className="summaryContainer">
        <div className="totals">
          <h2>Summary</h2>
          <span>
            <b>Gold: </b>
            {totalGold}
          </span>
          <br />
          <span>
            <b>Wood: </b>
            {totalWood}
          </span>
          <br />
          <span>
            <b>Ore: </b>
            {totalOre}
          </span>
          <br />
          <span>
            <b>Mana: </b>
            {totalMana}
          </span>
          <br />
        </div>

        <button className="resetBtn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Resources;
