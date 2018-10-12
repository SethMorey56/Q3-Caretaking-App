import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import MedicinePage from './components/MedicinePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path='/home' component={HomePage}/>
        <Route path='/medicine' component={MedicinePage}/>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;