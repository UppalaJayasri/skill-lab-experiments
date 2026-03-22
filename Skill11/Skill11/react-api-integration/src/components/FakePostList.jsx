import React, { useState, useEffect } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchPosts = () => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch(() => {
        alert("Error loading posts");
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = filter
    ? posts.filter((p) => p.userId == filter)
    : posts;

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>Refresh</button>

      <br /><br />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FakePostList;