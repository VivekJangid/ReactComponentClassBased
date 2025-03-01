import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  meggage: "Loading...",
};

export default Spinner;
