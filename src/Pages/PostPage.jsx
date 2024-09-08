import React, { useState, useEffect, useContext } from "react";
import Posts from "../Components/Post";
import context from "../Context/Context";
import "../Css/Home.css";

function PagePost() {
  const { posts } = useContext(context);
  const [findURL, setFindURL] = useState(null);
  const [currentPathname, setCurrentPathname] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const numberPost = currentPathname.match(/\d+/)[0];
    const foundPost = posts.find((post) => parseInt(post.id) === parseInt(numberPost));
    setFindURL(foundPost);
  }, [currentPathname, posts]);

  return (
    <div className="container-posts">
      {findURL ? (
        <Posts body={findURL.body} title={findURL.title} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PagePost;