import React from "react";
import PropTypes from "prop-types";


class Plant extends React.Component{
  constructor(props){
    super(props);
    this.removeThisPlant = this.removeThisPlant.bind(this);
  }

  removeThisPlant(){
    console.log(this.props);
    this.props.removePlant(this.props.name);
  }


  render(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.watering}</h3>
        <button onClick={this.removeThisPlant}>Remove this plant variety!</button>
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
