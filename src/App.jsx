import React from 'react';
import './Css/App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <div>
        <Route exact path='/'>
          <Home /> 
        </Route>
        <Route exact path='*'>
          <NotFound />
        </Route>
    </div>
  );
}

export default App;
