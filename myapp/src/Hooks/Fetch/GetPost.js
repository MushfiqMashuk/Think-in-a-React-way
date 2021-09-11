import { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There is an Error!");
      });
  }, []);

  return (
    <div>
      <p>
        {loading ? "Loading..." : post.title}
        {error || null}
      </p>
    </div>
  );
}
