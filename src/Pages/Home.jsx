
import React, {useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Pagination from "../Components/Pagination";
import Post from "../Components/Post";
import context from "../Context/Context";
import SearchBar from "../Components/Search";
import '../Css/Home.css'

const Home = () => {
  const { posts } = useContext(context);
  const [offset, setOffset] = useState(0);

  const LIMIT = 12;

  return (
    <div className="container-home">
      <div className="container-text">
          {
            posts.slice(offset, offset + LIMIT).map(({ title, id, body }) => (
            <div className="container-post"><Link to={`/posts/${id}`} key={ id } className="container-text">
              <Post body={body} title={title}/>
            </Link> </div>
            ))
          }
        <Pagination
          limit={LIMIT}
          total={posts.length}
          offset={offset}
          setOffset={setOffset}
          />
      </div>
      <div className="container-search">
        <SearchBar />
      </div>
    </div>
  )
}

export default Home;
