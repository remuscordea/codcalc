import React, { useState } from "react";
import classnames from "classnames";
import InputField from "./InputField";
import "./Speedups.css";

const Speedups = () => {
  const type = {
    building: "building",
    training: "training",
    research: "research",
    universal: "universal",
  };
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
  const [building, setBuilding] = useState(initialSpeedupsState);
  const [training, setTraining] = useState(initialSpeedupsState);
  const [research, setResearch] = useState(initialSpeedupsState);
  const [universal, setUniversal] = useState(initialSpeedupsState);

  const handleReset = () => {
    setBuilding(initialSpeedupsState);
    setTraining(initialSpeedupsState);
    setResearch(initialSpeedupsState);
    setUniversal(initialSpeedupsState);
  };

  const handleSpeedups = (event, speedupType) => {
    const { name, value } = event.target;
    const newValue = Math.max(0, parseFloat(value) || 0);

    switch (speedupType) {
      case type.building:
        setBuilding((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      case type.training:
        setTraining((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      case type.research:
        setResearch((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      case type.universal:
        setUniversal((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        break;
      default:
        break;
    }
  };

  const calculateTotalMinutes = (speedupType, state) => {
    return (
      (parseInt(state[speedupType].minutes1) || 0) * 1 +
      (parseInt(state[speedupType].minutes5) || 0) * 5 +
      (parseInt(state[speedupType].minutes10) || 0) * 10 +
      (parseInt(state[speedupType].minutes15) || 0) * 15 +
      (parseInt(state[speedupType].minutes30) || 0) * 30 +
      (parseInt(state[speedupType].minutes60) || 0) * 60 +
      (parseInt(state[speedupType].hours3) || 0) * 60 * 3 +
      (parseInt(state[speedupType].hours8) || 0) * 60 * 8 +
      (parseInt(state[speedupType].hours15) || 0) * 60 * 15 +
      (parseInt(state[speedupType].hours24) || 0) * 60 * 24 +
      (parseInt(state[speedupType].days3) || 0) * 60 * 24 * 3 +
      (parseInt(state[speedupType].days7) || 0) * 60 * 24 * 7 +
      (parseInt(state[speedupType].days30) || 0) * 60 * 24 * 30
    );
  };

  const totalBuildingMinutes = calculateTotalMinutes(type.building, {
    building,
  });
  const totalTrainingMinutes = calculateTotalMinutes(type.training, {
    training,
  });
  const totalResearchMinutes = calculateTotalMinutes(type.research, {
    research,
  });
  const totalUniversalMinutes = calculateTotalMinutes(type.universal, {
    universal,
  });

  const minutesToDaysHoursMinutes = (totalMinutes) => {
    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const remainingMinutes = totalMinutes % 60;

    return {
      days,
      hours,
      minutes: remainingMinutes,
    };
  };

  const buildingTimeObject = minutesToDaysHoursMinutes(totalBuildingMinutes);
  const trainingTimeObject = minutesToDaysHoursMinutes(totalTrainingMinutes);
  const researchTimeObject = minutesToDaysHoursMinutes(totalResearchMinutes);
  const universalTimeObject = minutesToDaysHoursMinutes(totalUniversalMinutes);

  return (
    <div>
      <header>
        <h2>Speedups calculator</h2>
        <button className="resetBtn" onClick={handleReset}>
          Reset all
        </button>
      </header>

      <div className="speedupsContainer">
        <article className={classnames("speedupsArticle", "building")}>
          <h3>Building</h3>
          <section className="speedupsSection">
            <InputField
              label="1 minute"
              name="minutes1"
              value={building.minutes1}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="5 minutes"
              name="minutes5"
              value={building.minutes5}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="10 minutes"
              name="minutes10"
              value={building.minutes10}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="15 minutes"
              name="minutes15"
              value={building.minutes15}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="30 minutes"
              name="minutes30"
              value={building.minutes30}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="60 minutes"
              name="minutes60"
              value={building.minutes60}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="3 hours"
              name="hours3"
              value={building.hours3}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="8 hours"
              name="hours8"
              value={building.hours8}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="15 hours"
              name="hours15"
              value={building.hours15}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="24 hours"
              name="hours24"
              value={building.hours24}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="3 days"
              name="days3"
              value={building.days3}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="7 days"
              name="days7"
              value={building.days7}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
            <InputField
              label="30 days"
              name="days30"
              value={building.days30}
              onChange={(e) => handleSpeedups(e, type.building)}
            />
          </section>
          <span className={"sectionTotal"}>
            {`Total: ${buildingTimeObject.days} days, ${buildingTimeObject.hours} hours and ${buildingTimeObject.minutes} minutes`}
          </span>
        </article>
        <article className={classnames("speedupsArticle", "training")}>
          <h3>Training</h3>
          <section className="speedupsSection">
            <InputField
              label="1 minute"
              name="minutes1"
              value={training.minutes1}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="5 minutes"
              name="minutes5"
              value={training.minutes5}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="10 minutes"
              name="minutes10"
              value={training.minutes10}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="15 minutes"
              name="minutes15"
              value={training.minutes15}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="30 minutes"
              name="minutes30"
              value={training.minutes30}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="60 minutes"
              name="minutes60"
              value={training.minutes60}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="3 hours"
              name="hours3"
              value={training.hours3}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="8 hours"
              name="hours8"
              value={training.hours8}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="15 hours"
              name="hours15"
              value={training.hours15}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="24 hours"
              name="hours24"
              value={training.hours24}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="3 days"
              name="days3"
              value={training.days3}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="7 days"
              name="days7"
              value={training.days7}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
            <InputField
              label="30 days"
              name="days30"
              value={training.days30}
              onChange={(e) => handleSpeedups(e, type.training)}
            />
          </section>
          <span className={"sectionTotal"}>
            {`Total: ${trainingTimeObject.days} days, ${trainingTimeObject.hours} hours and ${trainingTimeObject.minutes} minutes`}
          </span>
        </article>
        <article className={classnames("speedupsArticle", "research")}>
          <h3>Research</h3>
          <section className="speedupsSection">
            <InputField
              label="1 minute"
              name="minutes1"
              value={research.minutes1}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="5 minutes"
              name="minutes5"
              value={research.minutes5}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="10 minutes"
              name="minutes10"
              value={research.minutes10}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="15 minutes"
              name="minutes15"
              value={research.minutes15}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="30 minutes"
              name="minutes30"
              value={research.minutes30}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="60 minutes"
              name="minutes60"
              value={research.minutes60}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="3 hours"
              name="hours3"
              value={research.hours3}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="8 hours"
              name="hours8"
              value={research.hours8}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="15 hours"
              name="hours15"
              value={research.hours15}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="24 hours"
              name="hours24"
              value={research.hours24}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="3 days"
              name="days3"
              value={research.days3}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="7 days"
              name="days7"
              value={research.days7}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
            <InputField
              label="30 days"
              name="days30"
              value={research.days30}
              onChange={(e) => handleSpeedups(e, type.research)}
            />
          </section>
          <span className={"sectionTotal"}>
            {`Total: ${researchTimeObject.days} days, ${researchTimeObject.hours} hours and ${researchTimeObject.minutes} minutes`}
          </span>
        </article>
        <article className={classnames("speedupsArticle", "universal")}>
          <h3>Universals</h3>
          <section className="speedupsSection">
            <InputField
              label="1 minute"
              name="minutes1"
              value={universal.minutes1}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="5 minutes"
              name="minutes5"
              value={universal.minutes5}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="10 minutes"
              name="minutes10"
              value={universal.minutes10}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="15 minutes"
              name="minutes15"
              value={universal.minutes15}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="30 minutes"
              name="minutes30"
              value={universal.minutes30}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="60 minutes"
              name="minutes60"
              value={universal.minutes60}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="3 hours"
              name="hours3"
              value={universal.hours3}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="8 hours"
              name="hours8"
              value={universal.hours8}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="15 hours"
              name="hours15"
              value={universal.hours15}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="24 hours"
              name="hours24"
              value={universal.hours24}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="3 days"
              name="days3"
              value={universal.days3}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="7 days"
              name="days7"
              value={universal.days7}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
            <InputField
              label="30 days"
              name="days30"
              value={universal.days30}
              onChange={(e) => handleSpeedups(e, type.universal)}
            />
          </section>
          <span className={"sectionTotal"}>
            {`Total: ${universalTimeObject.days} days, ${universalTimeObject.hours} hours and ${universalTimeObject.minutes} minutes`}
          </span>
        </article>
      </div>
      <div className="summaryContainer">
        <div className="totals">
          <h2>Summary</h2>
          <span>
            <b>Building: </b>
            {`${buildingTimeObject.days} days, ${buildingTimeObject.hours} hours and ${buildingTimeObject.minutes} minutes`}
          </span>
          <br />
          <span>
            <b>Training: </b>
            {`${trainingTimeObject.days} days, ${trainingTimeObject.hours} hours and ${trainingTimeObject.minutes} minutes`}
          </span>
          <br />
          <span>
            <b>Research: </b>
            {`${researchTimeObject.days} days, ${researchTimeObject.hours} hours and ${researchTimeObject.minutes} minutes`}
          </span>
          <br />
          <span>
            <b>Universals: </b>
            {`${universalTimeObject.days} days, ${universalTimeObject.hours} hours and ${universalTimeObject.minutes} minutes`}
          </span>
          <br />
        </div>

        <button className="resetBtn" onClick={handleReset}>
          Reset all
        </button>
      </div>
    </div>
  );
};

export default Speedups;
