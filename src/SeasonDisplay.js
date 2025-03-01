import "./SeasonDisplay.css";
import React from "react";
import Clock from "./Clock";

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>
        {text}
        <br />
        <Clock />
      </h1>

      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Let's hit the Beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's Cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

export default SeasonDisplay;
