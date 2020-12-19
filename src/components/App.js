import React, { Component } from "react";

export default class App extends Component {
  handleClick = e => {
    e.preventDefault();
    const { pageX, pageY } = e;
    console.log({ pageX, pageY });
  };
  render() {
    return (
      <div className="App">
        <div className="clickArea" onClick={this.handleClick}></div>
      </div>
    );
  }
}
