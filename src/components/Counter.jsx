import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  async incrementCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  decrementCount() {
    if (this.state.count < 1) {
      alert("Value is always greater than 0");
    } else this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        Count : {this.state.count}
        <button
          onClick={() => {
            this.incrementCount();
          }}>
          +
        </button>
        <button
          onClick={() => {
            this.decrementCount();
          }}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
