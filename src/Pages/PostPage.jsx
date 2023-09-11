import React, { useContext } from "react";
import Posts from "../Components/Post";
import context from "../Context/Context";

function PagePost () {
  const { posts } = useContext(context);
  const basePostURL = window.location.pathname;
  const numberPost = basePostURL.match(/\d+/)[0];

  const findURL = posts.find((post) => parseInt(post.id) === parseInt(numberPost));

  return (
    <div>
      <h1>Post</h1>
      <Posts body={findURL.body} title={findURL.title} />
    </div>
  );
};

export default PagePost;
