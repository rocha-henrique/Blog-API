import React from "react";
import '../Css/Posts.css';

const Posts = ({body, title}) => {
  return (
      <div className="container-unicPost">
        <h2 
          className="heading-secondary"
          target="_Blank"
        >
          {title}
        </h2>
        <p
          className="paragraph-secondary"
          target="_Blank"
        >
          {body}
        </p>
      </div>
  );
};

export default Posts;
