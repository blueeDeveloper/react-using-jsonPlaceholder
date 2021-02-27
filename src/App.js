import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  });

  const updatePostTitle = (index) => {
    let selectedPostId = posts.findIndex((x) => x.id === index + 1);
    setPostTitle(posts[selectedPostId].body);
  };
  return (
    <div style={{ margin: 60 }}>
      <h3>Posts From JSONPlaceHolder</h3>
      {posts &&
        posts.map((post, index) => {
          if (index < 5)
            return (
              <div
                key={index}
                style={{
                  marginTop: 10,
                  textDecorationLine: "underline",
                  color: "blue",
                }}
                onClick={() => {
                  updatePostTitle(index);
                }}
              >
                {index + 1}. {post.title}
              </div>
            );
        })}

      <div style={{ marginTop: 20, textDecorationLine: "underline" }}>
        Description of selected title:
      </div>
      <div style={{ width: 600 }}>{postTitle}</div>
    </div>
  );
}

export default App;
