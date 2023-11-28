import React from "react";
import classnames from "classnames";
import InputField from "../InputField/InputField.js";
import "./Speedups.css";

const Speedups = ({
  building,
  setBuilding,
  training,
  setTraining,
  research,
  setResearch,
  universal,
  setUniversal,
  handleReset,
}) => {
  const type = {
    building: "building",
    training: "training",
    research: "research",
    universal: "universal",
  };

  const handleChange = (event, speedupType) => {
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
        <h2>Speedups</h2>
      </header>

      <div className="mainContainer">
        <div className="contentContainer">
          <section className={classnames("sectionContainer", "building")}>
            <div className="sectionHeader">
              <h3>Building</h3>
              <span className={"sectionTotal"}>
                {`(${buildingTimeObject.days} days, ${buildingTimeObject.hours} hours and ${buildingTimeObject.minutes} minutes)`}
              </span>
            </div>
            <div className="sectionCard">
              <InputField
                label="1 minute"
                name="minutes1"
                value={building.minutes1}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="5 minutes"
                name="minutes5"
                value={building.minutes5}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="10 minutes"
                name="minutes10"
                value={building.minutes10}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="15 minutes"
                name="minutes15"
                value={building.minutes15}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="30 minutes"
                name="minutes30"
                value={building.minutes30}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="60 minutes"
                name="minutes60"
                value={building.minutes60}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="3 hours"
                name="hours3"
                value={building.hours3}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="8 hours"
                name="hours8"
                value={building.hours8}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="15 hours"
                name="hours15"
                value={building.hours15}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="24 hours"
                name="hours24"
                value={building.hours24}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="3 days"
                name="days3"
                value={building.days3}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="7 days"
                name="days7"
                value={building.days7}
                onChange={(e) => handleChange(e, type.building)}
              />
              <InputField
                label="30 days"
                name="days30"
                value={building.days30}
                onChange={(e) => handleChange(e, type.building)}
              />
            </div>
          </section>
          <section className={classnames("sectionContainer", "training")}>
            <div className="sectionHeader">
              <h3>Training</h3>
              <span className={"sectionTotal"}>
                {`(${trainingTimeObject.days} days, ${trainingTimeObject.hours} hours and ${trainingTimeObject.minutes} minutes)`}
              </span>
            </div>
            <div className="sectionCard">
              <InputField
                label="1 minute"
                name="minutes1"
                value={training.minutes1}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="5 minutes"
                name="minutes5"
                value={training.minutes5}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="10 minutes"
                name="minutes10"
                value={training.minutes10}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="15 minutes"
                name="minutes15"
                value={training.minutes15}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="30 minutes"
                name="minutes30"
                value={training.minutes30}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="60 minutes"
                name="minutes60"
                value={training.minutes60}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="3 hours"
                name="hours3"
                value={training.hours3}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="8 hours"
                name="hours8"
                value={training.hours8}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="15 hours"
                name="hours15"
                value={training.hours15}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="24 hours"
                name="hours24"
                value={training.hours24}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="3 days"
                name="days3"
                value={training.days3}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="7 days"
                name="days7"
                value={training.days7}
                onChange={(e) => handleChange(e, type.training)}
              />
              <InputField
                label="30 days"
                name="days30"
                value={training.days30}
                onChange={(e) => handleChange(e, type.training)}
              />
            </div>
          </section>
          <section className={classnames("sectionContainer", "research")}>
            <div className="sectionHeader">
              <h3>Research</h3>
              <span className={"sectionTotal"}>
                {`(${researchTimeObject.days} days, ${researchTimeObject.hours} hours and ${researchTimeObject.minutes} minutes )`}
              </span>
            </div>
            <div className="sectionCard">
              <InputField
                label="1 minute"
                name="minutes1"
                value={research.minutes1}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="5 minutes"
                name="minutes5"
                value={research.minutes5}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="10 minutes"
                name="minutes10"
                value={research.minutes10}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="15 minutes"
                name="minutes15"
                value={research.minutes15}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="30 minutes"
                name="minutes30"
                value={research.minutes30}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="60 minutes"
                name="minutes60"
                value={research.minutes60}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="3 hours"
                name="hours3"
                value={research.hours3}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="8 hours"
                name="hours8"
                value={research.hours8}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="15 hours"
                name="hours15"
                value={research.hours15}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="24 hours"
                name="hours24"
                value={research.hours24}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="3 days"
                name="days3"
                value={research.days3}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="7 days"
                name="days7"
                value={research.days7}
                onChange={(e) => handleChange(e, type.research)}
              />
              <InputField
                label="30 days"
                name="days30"
                value={research.days30}
                onChange={(e) => handleChange(e, type.research)}
              />
            </div>
          </section>
          <section className={classnames("sectionContainer", "universal")}>
            <div className="sectionHeader">
              <h3>Universals</h3>
              <span className={"sectionTotal"}>
                {`(${universalTimeObject.days} days, ${universalTimeObject.hours} hours and ${universalTimeObject.minutes} minutes)`}
              </span>
            </div>
            <div className="sectionCard">
              <InputField
                label="1 minute"
                name="minutes1"
                value={universal.minutes1}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="5 minutes"
                name="minutes5"
                value={universal.minutes5}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="10 minutes"
                name="minutes10"
                value={universal.minutes10}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="15 minutes"
                name="minutes15"
                value={universal.minutes15}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="30 minutes"
                name="minutes30"
                value={universal.minutes30}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="60 minutes"
                name="minutes60"
                value={universal.minutes60}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="3 hours"
                name="hours3"
                value={universal.hours3}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="8 hours"
                name="hours8"
                value={universal.hours8}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="15 hours"
                name="hours15"
                value={universal.hours15}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="24 hours"
                name="hours24"
                value={universal.hours24}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="3 days"
                name="days3"
                value={universal.days3}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="7 days"
                name="days7"
                value={universal.days7}
                onChange={(e) => handleChange(e, type.universal)}
              />
              <InputField
                label="30 days"
                name="days30"
                value={universal.days30}
                onChange={(e) => handleChange(e, type.universal)}
              />
            </div>
          </section>
        </div>

        <div className="summaryContainer">
          <h3>Summary</h3>
          <span>
            <h4>Building: </h4>
            {`${buildingTimeObject.days} days, ${buildingTimeObject.hours} hours and ${buildingTimeObject.minutes} minutes`}
          </span>
          <span>
            <h4>Training: </h4>
            {`${trainingTimeObject.days} days, ${trainingTimeObject.hours} hours and ${trainingTimeObject.minutes} minutes`}
          </span>
          <span>
            <h4>Research: </h4>
            {`${researchTimeObject.days} days, ${researchTimeObject.hours} hours and ${researchTimeObject.minutes} minutes`}
          </span>
          <span>
            <h4>Universals: </h4>
            {`${universalTimeObject.days} days, ${universalTimeObject.hours} hours and ${universalTimeObject.minutes} minutes`}
          </span>

          <div className="summaryReset">
            <button className="resetBtn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speedups;
