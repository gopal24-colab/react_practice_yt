import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const DataFatching = () => {
  //   const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  /*
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.error(`Error to fetching posts: ${err}`);
      });
  }, []);
  */
  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(`Error to fetching posts: ${err}`);
      });
  }, [id]);

  return (
    <div>
      {/* <ul>
        {posts?.map((post) => {
          return (
            <li key={post?.id}>
              <h1>{post?.title}</h1>
              <p>{post?.body}</p>
            </li>
          );
        })}
      </ul> */}
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        value={id}
      />
      <h2>{post.title}</h2>
    </div>
  );
};

export default DataFatching;
