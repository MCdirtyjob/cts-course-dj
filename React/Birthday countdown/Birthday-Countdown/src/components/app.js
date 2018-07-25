import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>Yuppp</div>
        <div>Hi</div>
        <div>Hi</div>
        <div className="grid__skew-light-one" />
        <div className="grid__skew-light-two" />
        <div className="grid__skew-light-three-box" />
      </div>
    );
  }
}
