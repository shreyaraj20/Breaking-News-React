import React from "react";
import "./Post.css";

const Post = ({ post: { title, img, body, author }, i }) => {
  return (
    <div className="post-container container-fluid">
      <h3 className="heading">{title}</h3>
      <div className="row">
        <img className="image col-sm-4 col-lg-4" src={img} alt="post*" />
        <p className="col-sm-8 col-lg-8 content">{body}</p>
      </div>
      <div className="info ">
        <h5>Article Number: {i + 1}</h5>
        <h4>{author}</h4>
      </div>
    </div>
  );
};

export default Post;
