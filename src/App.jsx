import React from 'react';
import './Css/App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
        </Route>
      <Footer />
    </div>
  );
}

export default App;
