import React from "react";
import "./styles.css";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";

export default function App() {
  return (
    <div className="main-container">
      <h1 className="main-heading">Breaking News</h1>
      <Posts />
    </div>
  );
}
