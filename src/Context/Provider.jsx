import React, { useState, useMemo, useEffect } from "react";
import PropTypes from 'prop-types';
import Context from "./Context";
import axios from "axios";

function Provider({ children }) {
  const [posts, setPosts] = useState([]);

  const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  },[setPosts]);


  const value = useMemo(
    () => ({ posts, setPosts }), [posts, setPosts],
  );

    return <Context.Provider value={ value }>{ children }</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
