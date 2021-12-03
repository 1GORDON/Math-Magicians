/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const linkElement = screen.getAllByText(/Math Magicians/i);
  expect(linkElement[0].toBeInTheDocument);
});