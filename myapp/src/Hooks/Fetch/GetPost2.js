import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { loading: false, post: action.data, error: "" };

    case "ERROR":
      return {
        loading: false,
        post: action.data,
        error: "There is something wrong!",
      };

    default:
      return state;
  }
};

export default function GetPost2() {
  const [post, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", data: "" });
      });
  }, []);

  return (
    <div>
      <p>{post.loading ? "Loading..." : post.post.title}</p>
      <p>{post.error || null}</p>
    </div>
  );
}
