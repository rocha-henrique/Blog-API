import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, PostPage } from './Pages';
import './Css/App.css';

function App() {
  return (
    <Router basename="/Blog-API">
      <div className="container-app">
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts/:id" component={PostPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
