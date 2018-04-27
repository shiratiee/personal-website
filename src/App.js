
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import About from './About'
import Navbar from './navbar'
import Skills from './skills'
import Projects from './Projects'
import Contact from './contact'


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
       <Navbar/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;

