import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      language: "Java",
    };
  }
  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  changePasswordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  changeOptionHandler = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  submitHandler = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    const { email, password, language } = this.state;
    return (
      <div>
        <h1>Welcome form</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={this.changeEmailHandler}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.changePasswordHandler}
          />
          <select onChange={this.changeOptionHandler} value={language}>
            <option>Java</option>
            <option>C++</option>
            <option>Python</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
