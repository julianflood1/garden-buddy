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
    this.removePlant = this.removePlant.bind(this);
  }

  removePlant(name){
  var array = this.state.masterPlantList;
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      array.splice(i, 1);
      this.setState({masterPlantList: array});
    }
  }
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
        plantList = {this.state.masterPlantList}
        removePlant = {this.removeSuggestedPlant}/>
      <AddForm
        addNewPlantToList = {this.addNewPlantToList}/>
    </div>
  );
}
}

export default NurseryBody;
