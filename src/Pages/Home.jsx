import React, { useEffect, useState } from "react";
import Posts from "../Components/Posts";
import '../Css/Home.css'
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  },[]);

  console.log(posts);
  return (
    <div className="home">
      <h1>Home</h1>
        <div>
            {
              posts.map((post) => (
                <Posts body={post.body} title={post.title} />
              ))
            }
        </div>
    </div>
  );
}

export default Home;