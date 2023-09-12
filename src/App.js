import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, PostPage } from './Pages';
import './Css/App.css';

function App() {
  return (
    <Switch>
      <div className="container-app">
        <body className="body">
          <Route exact path='/' component={ Home } >
            <Home />
          </Route>
          <Route exact path='/posts/:id' component={ PostPage }>
            <PostPage />
          </Route>
        </body>
      </div>
    </Switch>
  );
}

export default App;