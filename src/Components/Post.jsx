import React from "react";
import '../Css/Posts.css';

const Posts = ({body, title}) => {
  return (
      <div>
        <h2 
          className="heading-secondary"
          target="_Blank"
        >
          {title}
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
