import React from 'react';
import './Css/App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PostPage from './Pages/PostPage';
import NotFound from "./Pages/NotFound"


function App() {
  return (
    <div>
        <Route exact path='/'>
          <Home /> 
        </Route>
        <Route exact path='/posts/:id'>
          <PostPage />
        <Route exact path='*'>
          <NotFound />
        </Route>
    </div>
  );
}

export default App;
