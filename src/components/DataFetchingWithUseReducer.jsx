import React, { useReducer, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/1";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

const DataFetchingWithUseReducer = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

  return (
    <div>
      {data?.loading ? <p>loading ...</p> : <p>{data?.post.title}</p>}
      {data?.error && <p> data?.error</p>}
    </div>
  );
};

export default DataFetchingWithUseReducer;
