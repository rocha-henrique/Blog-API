
import React, {useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Post from "../Components/Post";
import context from "../Context/Context";
import '../Css/Home.css'


const Home = () => {
  const { posts } = useContext(context);
  const [offset, setOffset] = useState(0);
  const LIMIT = 12;
  
  return (
    <div className="home">
      <Navbar />
      <h1>Home</h1>
      <div>
          {
            posts.slice(offset, offset + LIMIT).map(({ title, id, body }) => (
            <Link to={`/posts/${id}`} key={ id } >
              <Post body={body} title={title}/>
            </Link>
            ))
          }
      </div>
        <Pagination
          limit={LIMIT}
          total={posts.length}
          offset={offset}
          setOffset={setOffset}
        />
      <Footer />
    </div>
  )
}

export default Home;
