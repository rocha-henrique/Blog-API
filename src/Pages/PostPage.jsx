import React, { useState, useEffect, useContext } from "react";
import Posts from "../Components/Post";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import context from "../Context/Context";

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
    <div>
      <Navbar />
      {findURL ? (
        <Posts body={findURL.body} title={findURL.title} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
}

export default PagePost;