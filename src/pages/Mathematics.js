/* eslint-disable no-unused-vars */
import React from 'react';
import Calculator from '../components/Calculator.js';
import '../styles/Mathematics.css';

function Mathematics() {
  return (
    <section>
      <div className="calculator-page">
        <h2>Let&apos;s do some maths!</h2>
      </div>
      <Calculator />
    </section>
  );
}

export default Mathematics;