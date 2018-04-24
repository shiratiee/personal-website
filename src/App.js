
import React, { Component } from 'react';
import logo from './logo.svg';
import { Router } from 'react-router';
import { Route} from 'react-router-dom';
import './App.css';
import history from './history';
import About from './About'
import Navbar from './navbar'
import Skills from './skills'
import Projects from './Projects'
import Contact from './contact'

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="App">
      <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
    );
  }
}

export default App;

