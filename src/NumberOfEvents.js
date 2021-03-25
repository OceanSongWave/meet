import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
import "./styles.css";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });

    if (value < 1 || value > 32 || value === "") {
      this.setState({
        infoText: "Please enter number between 1 ~ 32!",
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
        <label>Number of Events: </label>
        <input
          type="text"
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
