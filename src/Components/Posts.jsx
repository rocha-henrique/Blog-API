import React from "react";
import '../Css/Posts.css';

const Posts = ({body, title}) => {
  return (
      <div className="text">
          <span className="red">{title}</span>
          <span className="white">{body}</span>
      </div>
  );
};

export default Posts;
