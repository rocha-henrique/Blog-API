import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Post from "../Components/Post";
import context from "../Context/Context";
import React, { useEffect, useState } from "react";
import Posts from "../Components/Posts";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Css/Home.css'

const Home = () => {
  const { posts } = useContext(context);

  return (
    <div className="home">
      <h1>Home</h1>
        {
          posts.map(({ title, id, body }) => (
            <Link to={`/posts/${id}`} key={ id } >
              <Post body={body} title={title}/>
            </Link>
          ))
        }
    </div>
  );
}

export default Home;