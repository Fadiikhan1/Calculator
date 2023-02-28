import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState(''); // State to hold the current input value
  const [result, setResult] = useState(0); // State to hold the current calculation result

  // Function to handle when a number button is clicked
  const handleNumberClick = (number) => {
   

    setInput(input + number);
  };

  // Function to handle when an operator button is clicked
  const handleOperatorClick = (operator) => {

    if (input !== '') {
      setInput('');
      switch (operator) {
        case '+':
          setResult(result + parseInt(input));
          break;
        case '-':
          setResult(result - parseInt(input));
          break;
        case '*':
          setResult(result * parseInt(input));
          break;
        case '/':
          setResult(result / parseInt(input));
          break;
        default:
          setResult(0);
      }
    }
  };

  // Function to handle when the clear button is clicked
  const handleClearClick = () => {
    
    setInput('');
    setResult(0);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly />
      <br />
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <br />
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <br />
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <br />
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={() => handleClearClick()}>C</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={() => setResult(result)}>=</button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;



