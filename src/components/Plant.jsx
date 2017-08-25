import React from "react";

function Plant(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.watering}</h3>
      <hr/>
    </div>
  );
}

export default Plant;
