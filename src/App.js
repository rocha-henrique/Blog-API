import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, PostPage } from './Pages';
import './Css/App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Home } >
        <Home />
      </Route>
      <Route exact path='/posts/:id' component={ PostPage }>
        <PostPage />
      </Route>
      <Route exact path='*' component={ NotFound }>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;