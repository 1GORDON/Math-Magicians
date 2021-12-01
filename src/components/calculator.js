/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Screen from './Screen.js';
import Button from './Button.js';
import calculate from '../logic/calculate.js';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const results = calculate({ total, next, operation }, value);
    setTotal(results.total);
    setNext(results.next);
    setOperation(results.operation);
  };
  return (
    <div id="calculator">
      <Screen id="display" total={total} next={next} operation={operation} />
      <Button id="clear" name="AC" handleClick={handleClick} />
      <Button id="delete" name="+/-" handleClick={handleClick} />
      <Button id="delete" name="%" handleClick={handleClick} />
      <Button id="divide" name="÷" handleClick={handleClick} />
      <Button id="seven" name="7" handleClick={handleClick} />
      <Button id="eight" name="8" handleClick={handleClick} />
      <Button id="nine" name="9" handleClick={handleClick} />
      <Button id="multiply" name="x" handleClick={handleClick} />
      <Button id="four" name="4" handleClick={handleClick} />
      <Button id="five" name="5" handleClick={handleClick} />
      <Button id="six" name="6" handleClick={handleClick} />
      <Button id="subtract" name="-" handleClick={handleClick} />
      <Button id="one" name="1" handleClick={handleClick} />
      <Button id="two" name="2" handleClick={handleClick} />
      <Button id="three" name="3" handleClick={handleClick} />
      <Button id="add" name="+" handleClick={handleClick} />
      <Button id="zero" name="0" handleClick={handleClick} />
      <Button id="decimal" name="." handleClick={handleClick} />
      <Button id="equals" name="=" handleClick={handleClick} />
    </div>
  );
};

export default Calculator;