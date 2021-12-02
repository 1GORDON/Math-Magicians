/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import Calculator from '../components/calculator.js';
import '../styles/Mathematics.css';

const Mathematics = () => (
    <section>
      <div className="calculator-page">
        <h2>Let&apos;s do some maths!</h2>
      </div>
      <Calculator />
    </section>
);

export default Mathematics;