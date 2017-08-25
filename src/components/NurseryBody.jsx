import React from "react";
import AddForm from "./AddForm";
import PlantList from "./PlantList";

class NurseryBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPlantList: [],
    };
    this.addNewPlantToList = this.addNewPlantToList.bind(this);
  }

  addNewPlantToList(newPlant){
    let newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }

render(){
  return (
    <div>
      <PlantList
        plantList = {this.state.masterPlantList}/>
      <AddForm
        addNewPlantToList = {this.addNewPlantToList}/>
    </div>
  );
}
}

export default NurseryBody;
