import React, { useContext } from "react";
import Posts from "../Components/Post";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import context from "../Context/Context";

function PagePost () {
  const { posts } = useContext(context);
  const basePostURL = window.location.pathname;
  const numberPost = basePostURL.match(/\d+/)[0];
  const findURL = posts.find((post) => parseInt(post.id) === parseInt(numberPost));

  return (
    <div>
      <Navbar />
      <h1>Post</h1>
      <Posts body={findURL.body} title={findURL.title} />
      <Footer />
    </div>
  );
};

export default PagePost;
