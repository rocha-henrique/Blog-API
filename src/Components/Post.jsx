import React from "react";
import '../Css/Posts.css';

const Posts = ({body, title}) => {
  return (
      <div className="container-unicPost">
        <h2 
          className="heading"
          target="_Blank"
        >
          {title.toUpperCase()}
        </h2>
        <p
          className="paragraph"
          target="_Blank"
        >
          {body}
        </p>
      </div>
  );
};

export default Posts;
