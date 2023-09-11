import React from "react";
import '../Css/Posts.css';

const Posts = ({body, title}) => {
  return (
      <div className="text">
          <h2 className="red" target="_Blank">{title}</h2>
          <p className="white" target="_Blank">{body}</p>
      </div>
  );
};


//Post

export default Posts;
