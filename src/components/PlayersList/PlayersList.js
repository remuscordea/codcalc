import React from "react";
import img1 from "../../images/PS1.png";
import img2 from "../../images/PS2.png";
import "./PlayersList.css";

const PlayersList = () => {
  return (
    <div>
      <div className="listContainer">
        <img src={img1} alt="img" />
      </div>
      <div className="listContainer">
        <img src={img2} alt="img" />
      </div>
    </div>
  );
};

export default PlayersList;
