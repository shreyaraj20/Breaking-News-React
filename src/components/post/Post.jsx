import React from "react";
import "./Post.css";

const Post = ({ post: { title, img, body, author }, i }) => {
  return (
    <div className="post-container">
      <h3 className="heading">{title}</h3>
      <img className="image" src={img} alt="post*" />
      <p>{body}</p>
      <div className="info">
        <h5>Article Number: {i + 1}</h5>
        <h4>{author}</h4>
      </div>
    </div>
  );
};

export default Post;
