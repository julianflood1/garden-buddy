import React from "react";
import Plant from "./Plant";

function PlantList(props){
  return (
    <div>
    <hr/>
      {props.plantList.map((plantList, index) =>
        <Plant name={plantList.name}
          watering={plantList.watering}
          childPlantList={plantList}
          removePlant={props.removePlant}
          key={index}/>

      )}
    </div>
  );
}



export default PlantList;
