import React, { Component } from "react";
import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
import LargeText from "./largeText";
import moment from "moment";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      startDate: moment()
    };
  }

  handleChange = function(date) {
    console.log("ABCDEF", date._d);
    this.setState({
      startDate: date
    });
  }.bind(this);
  handleGenerate = function() {
    this.setState({ active: true });

    var countDownDate = this.state.startDate.toDate().getTime();
  };

  renderItems = function() {
    if (this.state.active) {
      return [
        <Clock />,
        ChangeDate("Change Date", () => this.setState({ active: false })),
        LargeText("04/03"),
        <label className="grid__remaining">
          Remaining untill your 21st Birthday
        </label>
      ];
    } else {
      return [
        <Picker callback={date => this.handleChange(date)} />,
        Button("Generate Countdown", () => this.handleGenerate())
      ];
    }
  }.bind(this);

  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>

        <div className="grid__skew-dark-two" />
        <div className="grid__skew-dark-three" />

        <div className="grid__skew-light-one" />
        <div className="grid__skew-light-two" />
        <div className="grid__skew-light-three-box" />

        {this.renderItems()}
      </div>
    );
  }
}
