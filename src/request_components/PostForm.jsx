import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandaler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandaler}>
          <div className="">
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandeler}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandeler}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandeler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
