import React, { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import Posts from "../Components/Posts";
import '../Css/Home.css'
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';
  const LIMIT = 12;

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  },[]);

  console.log(posts);
  console.log(posts.length);
  return (
    <div className="home">
      <h1>Home aaaaaaaaa</h1>
        <div>
            {
              posts.slice(offset, offset + LIMIT).map((post) => (
                <Posts body={post.body} title={post.title} />
              ))
            }
        </div>
        <div>
          <Pagination 
            limit={LIMIT}
            total={posts.length}
            offset={offset}
            setOffset={setOffset}
          />
        </div>
    </div>
  );
}

export default Home;