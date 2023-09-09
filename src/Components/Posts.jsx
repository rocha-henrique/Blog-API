import React from "react";
import '../Css/Posts.css';

const Posts = ({body, title}) => {
  return (
      <div className="text">
          <h2 className="red">{title}</h2>
          <p className="white">{body}</p>
      </div>
  );
};

export default Posts;
