import React from 'react';
import '../calculator.css';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((previousState) => calculate(previousState, e));
  }

  render() {
    const { total, next, operation } = this.state;
    return (

<div className="calculator">
<div className="answer">{total}{operation}{next}</div>
<div className="buttons">
  <button type="button" id = "AC" className="button" onClick={() => this.handleClick('AC')}>AC</button>
  <button type="button" id = "+/-" className="button" onClick={() => this.handleClick('+/-')}>+/-</button>
  <button type="button" id = "%" className="button" onClick={() => this.handleClick('%')}>%</button>
  <button type="button" id = "&divide;" className="button orange" onClick={() => this.handleClick('÷')}>&divide;</button>
  <button type="button" id = "7" className="button" onClick={() => this.handleClick('7')}>7</button>
  <button type="button" id = "8" className="button" onClick={() => this.handleClick('8')}>8</button>
  <button type="button" id = "9" className="button" onClick={() => this.handleClick('9')}>9</button>
  <button type="button" id = "&times;" className="button orange" onClick={() => this.handleClick('x')}>&times;</button>
  <button type="button" id = "4" className="button" onClick={() => this.handleClick('4')}>4</button>
  <button type="button" id = "5" className="button" onClick={() => this.handleClick('5')}>5</button>
  <button type="button" id = "6" className="button" onClick={() => this.handleClick('6')}>6</button>
  <button type="button" id = "-" className="button orange" onClick={() => this.handleClick('-')}>-</button>
  <button type="button" id = "1" className="button" onClick={() => this.handleClick('1')}>1</button>
  <button type="button" id = "2" className="button" onClick={() => this.handleClick('2')}>2</button>
  <button type="button" id = "3" className="button" onClick={() => this.handleClick('3')}>3</button>
  <button type="button" id = "+" className="button orange" onClick={() => this.handleClick('+')}>+</button>
  <button type="button" id = "0" className="button double-button" onClick={() => this.handleClick('0')}>0</button>
  <button type="button" id = "." className="button" onClick={() => this.handleClick('.')}>.</button>
  <button type="button" id = "=" className="button orange" onClick={() => this.handleClick('=')}>=</button>
</div>
</div>
    );
  }
}

export default Calculator;