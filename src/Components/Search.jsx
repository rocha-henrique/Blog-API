import React, { useState, useContext } from 'react';
import context from '../Context/Context';
import { Link } from 'react-router-dom';
import "../Css/Home.css";

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
      <input
        type="text"
        name="searchTerm"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleInputChange}
        class="container-input"
      />
      <button type="submit" className="btn-clear">Pesquisar</button>
      <button type="button" onClick={handleClearSearch} className="btn-search">Limpar Pesquisa</button> {/* Adicione o botão de limpar pesquisa */}

      {searchResults.map((post) => (
        <div key={post.id} className="container-miniPost">
          <Link to={`/posts/${post.id}`} className="container-text">
            <h3 className='heading-tertiary'>{post.title}</h3>
            <p className='paragraph'>{post.body}</p>
          </Link>
        </div>
      ))}
    </form>
  );
};

export default SearchBar;