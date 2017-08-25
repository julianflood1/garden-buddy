import React from "react";
import Plant from "../models/Plant.js";
import PropTypes from "prop-types";


class AddForm extends React.Component {

  constructor(props){
    super(props)
    this.newPlantSubmission = this.newPlantSubmission.bind(this);
  }

  newPlantSubmission(event){
    event.preventDefault();
    const { _name, _watering } = this.refs;
    var newPlant = new Plant(_name.value, _watering.value);
    console.log('hi');
    console.log(newPlant);

    this.props.addNewPlantToList(newPlant);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.newPlantSubmission}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Plant Variety" />
          <input
            ref="_watering"
            type="text"
            id="watering"
            placeholder="Watering Interval" />
          <button type="submit">Add New Plant</button>
        </form>
      </div>
    );
  }
}

AddForm.propTypes = {
  addNewPlantToList: PropTypes.func,
};

export default AddForm;
