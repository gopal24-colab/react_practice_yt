import React, { Component } from "react";
import LifecycleB from "./components/LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called");

    this.state = {
      name: "Gopal Sasmal ",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Called");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount Called");
  }

  render() {
    console.log("render caller");
    return (
      <div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
