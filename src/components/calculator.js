/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../calculator.css';
import calculate from '../logic/calculate.js';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const results = calculate({ total, next, operation }, e);
    setTotal(results.total);
    setNext(results.next);
    setOperation(results.operation);
  };
  return (

<div className="calculator">
<div className="answer">{total}{operation}{next}</div>
<div className="buttons">
  <button type="button" id = "AC" className="button" onClick={() => handleClick('AC')}>AC</button>
  <button type="button" id = "+/-" className="button" onClick={() => handleClick('+/-')}>+/-</button>
  <button type="button" id = "%" className="button" onClick={() => handleClick('%')}>%</button>
  <button type="button" id = "&divide;" className="button orange" onClick={() => handleClick('÷')}>&divide;</button>
  <button type="button" id = "7" className="button" onClick={() => handleClick('7')}>7</button>
  <button type="button" id = "8" className="button" onClick={() => handleClick('8')}>8</button>
  <button type="button" id = "9" className="button" onClick={() => handleClick('9')}>9</button>
  <button type="button" id = "&times;" className="button orange" onClick={() => handleClick('x')}>&times;</button>
  <button type="button" id = "4" className="button" onClick={() => handleClick('4')}>4</button>
  <button type="button" id = "5" className="button" onClick={() => handleClick('5')}>5</button>
  <button type="button" id = "6" className="button" onClick={() => handleClick('6')}>6</button>
  <button type="button" id = "-" className="button orange" onClick={() => handleClick('-')}>-</button>
  <button type="button" id = "1" className="button" onClick={() => handleClick('1')}>1</button>
  <button type="button" id = "2" className="button" onClick={() => handleClick('2')}>2</button>
  <button type="button" id = "3" className="button" onClick={() => handleClick('3')}>3</button>
  <button type="button" id = "+" className="button orange" onClick={() => handleClick('+')}>+</button>
  <button type="button" id = "0" className="button double-button" onClick={() => handleClick('0')}>0</button>
  <button type="button" id = "." className="button" onClick={() => handleClick('.')}>.</button>
  <button type="button" id = "=" className="button orange" onClick={() => handleClick('=')}>=</button>
</div>
</div>
  );
};

export default Calculator;