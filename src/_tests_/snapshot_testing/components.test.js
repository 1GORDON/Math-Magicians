/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../../components/Calculator.js';
import Header from '../../components/Header.js';
import Navbar from '../../components/Navbar.js';
import Button from '../../components/Button.js';
import Screen from '../../components/Screen.js';
import Home from '../../pages/Home.js';
import Mathematics from '../../pages/Mathematics.js';
import Quotes from '../../pages/Quotes.js';
import Footer from '../../components/Footer.js';

describe('test screenshots for all components', () => {
  test('matches Calculator snapshot', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Header snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Navbar snapshot', () => {
    const tree = TestRenderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Button snapshot', () => {
    const tree = TestRenderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Screen snapshot', () => {
    const tree = TestRenderer.create(<Screen />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Home snapshot', () => {
    const tree = TestRenderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Mathematics snapshot', () => {
    const tree = TestRenderer.create(<Mathematics />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Quote snapshot', () => {
    const tree = TestRenderer.create(<Quotes />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches Footer snapshot', () => {
    const tree = TestRenderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});