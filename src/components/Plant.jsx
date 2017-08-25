import React from "react";
import PropTypes from "prop-types";

// removeItem(){
//   props.removePlant();
// }

function Plant(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.watering}</h3>
      <button onClick={this.removeItem}>Remove this plant variety!</button>
      <hr/>
    </div>
  );
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  watering: PropTypes.string.isRequired
}

export default Plant;
