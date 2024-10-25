import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FirstTask from "./components/FirstTask";
import SecondTask from "./components/SecondTask";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error("Помилка при завантаженні постів:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .catch((error) =>
        console.error("Помилка при завантаженні коментарів:", error)
      )
      .then((response) => setComments(response.data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name}
            {comment.email}
          </li>
        ))}
      </ol>
      <FirstTask />
      <SecondTask />
    </div>
  );
}

export default App;
