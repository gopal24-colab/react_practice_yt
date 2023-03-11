import React, { useEffect, useState } from "react";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts/10";

const DataFatchingWithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.message);
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading && <h1> Loading...</h1>}
      {error && `Error is occuring and message is ${error}`}
      <h1>{post.title}</h1>
    </div>
  );
};

export default DataFatchingWithUseState;
