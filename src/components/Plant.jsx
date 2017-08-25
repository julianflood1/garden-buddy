import React from "react";
import PropTypes from "prop-types";


class Plant extends React.Component{
  constructor(props){
    super(props);
    this.removePlant = this.removePlant.bind(this);
  }

  removePlant(){
    console.log(this.props);
    this.props.deletePlant(this.props.masterPlantList.name)
  }


  render(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.watering}</h3>
        <button onClick={this.removePlant}>Remove this plant variety!</button>
        <hr/>
      </div>
    );
  }
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  watering: PropTypes.string.isRequired
}

export default Plant;
