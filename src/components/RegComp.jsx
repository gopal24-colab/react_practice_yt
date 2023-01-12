import React, { Component } from "react";

class RegComp extends Component {
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
    console.log("Regualar component");
    return <div>RegComp</div>;
  }
}

export default RegComp;
