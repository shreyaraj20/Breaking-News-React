import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post-container">
      <h1 className="heading">Title</h1>
      <img className="image" src="" alt="post*" />
      <p>Body</p>
      <h5>Number</h5>
      <h4>Author</h4>
    </div>
  );
};

export default Post;
