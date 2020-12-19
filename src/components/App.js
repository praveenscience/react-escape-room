import React, { Component } from "react";
import { hasClickedCoords } from "../helpers/coords";

export default class App extends Component {
  handleClick = e => {
    e.preventDefault();
    const { pageX, pageY } = e;
    // Handler for Lightbulb 1
    console.log(hasClickedCoords(pageX, pageY, [770, 300, 940, 425]) ? "Clicked on Light Bulb 1" : null);
    // Handler for Lightbulb 2
    console.log(hasClickedCoords(pageX, pageY, [1225, 375, 1320, 455]) ? "Clicked on Light Bulb 2" : null);
  };
  render() {
    return (
      <div className="App">
        <div className="clickArea" onClick={this.handleClick}></div>
      </div>
    );
  }
}
