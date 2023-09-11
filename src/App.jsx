import React from 'react';
import './Css/App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <div>
        <Route exact path='/' element={ <Home /> }/>
        <Route exact path='*' element={ <NotFound />} />
    </div>
  );
}

export default App;
