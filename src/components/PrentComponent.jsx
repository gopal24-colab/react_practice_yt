import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class PrentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }
  greetParent = (childName) => {
    console.log(`Hello parent ${this.state.parentName} from ${childName}`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default PrentComponent;
