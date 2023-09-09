import React from 'react';
import './Css/App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ClickPost from './Pages/ClickPost';

function App() {
  return (
    <div>
      <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/post'>
          <ClickPost />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
