import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const DataFetchOnButtonClick = () => {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});

  const [clickId, setClickId] = useState(1);

  const handelClick = () => {
    setClickId(id);
  };

  useEffect(() => {
    axios
      .get(`${url}/${clickId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(`Error ${err}`);
      });
  }, [clickId]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handelClick}> Fetch data </button>
      <h1>{post.title}</h1>
    </div>
  );
};

export default DataFetchOnButtonClick;
