import React, { Component } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComp";
// import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gopal",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Gopal" });
    }, 2000);
  }
  render() {
    return (
      <div>
        {/* <PureComp />
        <RegComp /> */}
        <MemoComp />
      </div>
    );
  }
}

export default ParentComp;
