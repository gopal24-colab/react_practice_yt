import React, { PureComponent } from "react";

class PureComp extends PureComponent {
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
    console.log("Pure component");
    return <div>PureComp</div>;
  }
}

export default PureComp;
