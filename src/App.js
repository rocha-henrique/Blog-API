import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, PostPage } from './Pages';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Css/App.css';

function App() {
  return (
    <Router basename="/Blog-API">
      <Navbar />
      <div className="container-app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
