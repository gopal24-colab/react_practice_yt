import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PostsListFun = () => {
  // state
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("Error Occuring due to fetching data from the server");
      });
  }, []);

  return (
    <div>
      {posts.length
        ? posts.map((post) => {
            return (
              <div className="">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            );
          })
        : error}
    </div>
  );
};

export default PostsListFun;
