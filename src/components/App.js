import React, { Component } from "react";
import { hasClickedCoords } from "../helpers/coords";
import Unsolved from "../assets/puzzle.png";
import Complete from "../assets/complete.png";

export default class App extends Component {
  state = {
    Bulb1: false,
    Bulb2: false,
    Points: 0
  };
  handleClick = e => {
    e.preventDefault();
    const { pageX, pageY } = e;
    // Handler for Lightbulb 1
    if (!this.state.Bulb1 && hasClickedCoords(pageX, pageY, [770, 300, 940, 425]))
      if (window.prompt("What do you see?") === "Light 1") {
        this.setState({ Bulb1: true, Points: this.state.Points + 1 });
        window.alert("Wow! That's right! You got a point!");
      } else {
        window.alert("Sorry! Try again!");
      }
    // Handler for Lightbulb 2
    if (!this.state.Bulb2 && hasClickedCoords(pageX, pageY, [1225, 375, 1320, 455]))
      if (window.prompt("What do you see?") === "Light 2") {
        window.alert("Wow! That's right! You got a point!");
        this.setState({ Bulb2: true, Points: this.state.Points + 1 });
      } else {
        window.alert("Sorry! Try again!");
      }
  };
  render() {
    return (
      <div className="App">
        <div className="clickArea" onClick={this.handleClick}></div>
        <div className="puzzle">
          <img src={this.state.Bulb1 ? Complete : Unsolved} className={this.state.Bulb1 ? "solved" : null} alt="" />
          <img src={this.state.Bulb2 ? Complete : Unsolved} className={this.state.Bulb2 ? "solved" : null} alt="" />
        </div>
      </div>
    );
  }
}
