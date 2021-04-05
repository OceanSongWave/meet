import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
import "./styles.css";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 22,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });

    if (value < 1 || value > 22 || value === "") {
      this.setState({
        infoText: "Please enter number between 1 ~ 22!",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label><h4>Number of Events: </h4></label>
        <input
          type="number"
          id="numberOfEvents__input"
          placeholder="Enter number"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <div className="error-alert">
        <ErrorAlert text={this.state.infoText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
