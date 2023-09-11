
import React, { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import Posts from "../Components/Posts";

import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Post from "../Components/Post";
import context from "../Context/Context";

import '../Css/Home.css'

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
        <Pagination
          limit={LIMIT}
          total={posts.length}
          offset={offset}
          setOffset={setOffset}
        />

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
