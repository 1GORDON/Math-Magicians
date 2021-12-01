/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import QuoteData from '../components/QuoteData.js';
import '../styles/Quotes.css';

const Quotes = () => {
  const quotes = QuoteData();
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const RandomQuote = quotes[randomIndex];

    setQuote(RandomQuote.quote);
    setAuthor(RandomQuote.author);
  });

  return (
    <section className="quotes-section">
      <p>{quote}</p>
      <h3>{`-${author}`}</h3>
    </section>
  );
};

export default Quotes;