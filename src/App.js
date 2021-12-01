/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mathematics from './pages/Mathematics';
import Quotes from './pages/Quotes';
import Footer from './components/Footer';
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