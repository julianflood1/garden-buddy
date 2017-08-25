import React from "react";
import PropTypes from "prop-types";

function Plant(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.watering}</h3>
      <h1>hi</h1>
      <hr/>
    </div>
  );
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  watering: PropTypes.string.isRequired
}

export default Plant;
