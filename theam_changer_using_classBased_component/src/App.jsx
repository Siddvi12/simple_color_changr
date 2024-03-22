import React from "react";

import "./App.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      changer: "yellow",
    };
  }
  colorChange = () => {
    this.setState({ changer: "blue" });
  };

  render() {
    return (
      <>
        <button onClick={this.colorChange} style={{background:this.state.changer}}>
          {this.state.changer}
        </button>
        <div>hello  {this.state.changer}</div>
      </>
    );
  }
}
