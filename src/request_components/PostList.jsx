import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errors: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ errors: "Errors when retriving data" });
      });
  }

  render() {
    const { posts, errors } = this.state;
    return (
      <div>
        <h2>Fake post are here</h2>
        {posts.length
          ? posts.map((post) => {
              return <div key={post.id}>{post.title}</div>;
            })
          : errors}
      </div>
    );
  }
}

export default PostList;
