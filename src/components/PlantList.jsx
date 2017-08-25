import React from "react";
import Plant from "./Plant";

function PlantList(props){
  return (
    <div>
    <hr/>
      {props.plantList.map((plant, index) =>
        <Plant name={plant.name}
          watering={plant.watering}
          key={index}/>
      )}
    </div>
  );
}

export default PlantList;
