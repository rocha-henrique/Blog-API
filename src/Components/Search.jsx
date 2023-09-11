import React, { useState, useContext } from 'react';
import context from '../Context/Context';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults, handleSearch, clearSearchResults } = useContext(context);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emptySearchResults = [];
    clearSearchResults(emptySearchResults);

    handleSearch(searchTerm);
    setSearchTerm('');
  };

  const handleClearSearch = () => {
    clearSearchResults();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="searchTerm" value={searchTerm} onChange={handleInputChange} />
      <button type="submit">Pesquisar</button>
      <button type="button" onClick={handleClearSearch}>Limpar Pesquisa</button> {/* Adicione o botão de limpar pesquisa */}

      {searchResults.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </form>
  );
};

export default SearchBar;