import React from "react";
import AddForm from "./AddForm";
import PlantList from "./PlantList";

class NurseryBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPlantList: [],
    };
  }

render(){
  return (
    <div>
      <AddForm/>
      <PlantList
        plantList = {this.state.masterPlantList}/>
    </div>
  );
}
}

export default NurseryBody;
