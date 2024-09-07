import React, { useState, useMemo, useEffect } from "react";
import PropTypes from 'prop-types';
import Context from "./Context";
import axios from "axios";

function Provider({ children }) {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}&_limit=10`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erro ao buscar resultados da pesquisa:", error);
    }
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  },[setPosts]);


  const value = useMemo(
    () => ({ posts, setPosts, searchResults, handleSearch, clearSearchResults }), [posts, setPosts, searchResults],
  );

    return <Context.Provider value={ value }>{ children }</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;