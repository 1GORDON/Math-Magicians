/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Mathematics from './pages/Mathematics.js';
import Quotes from './pages/Quotes.js';
import Footer from './components/Footer.js';
import './styles/Calculator.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <Switch>
          <Route path="/quote">
            <Quotes />
          </Route>
          <Route path="/calculator">
            <Mathematics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;