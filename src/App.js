import React from "react";
import "./styles.css";
import Posts from "./components/posts/Posts";

export default function App() {
  return (
    <div className="main-container">
      <h1 className="main-heading">Famous Articles</h1>
      <Posts />
    </div>
  );
}
