import React, { useState } from 'react';
import Output from './Output/Output';
import KeyPad from './KeyPad/KeyPad';
import styles from './App.module.css';

const App = () => {
  const [output, setOutput] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [operator, setOperator] = useState('');

  const [activePlus, setActivePlus] = useState(false);
  const [activeMinus, setActiveMinus] = useState(false);
  const [activeMultiply, setActiveMultiply] = useState(false);
  const [activeDivide, setActiveDivide] = useState(false);

  const addToOutput = (e) => {
    e.persist();
    if (output === '0') {
      setOutput(e.target.innerText);
    } else if (operator !== '') {
      setOutput((prev) => prev + e.target.innerText);
    } else {
      setOutput((prev) => prev + e.target.innerText);
    }
  };

  const clear = () => {
    setPrevNumber('');
    setOperator('');
    setActivePlus(false);
    setActiveMinus(false);
    setActiveMultiply(false);
    setActiveDivide(false);
  };

  const clearAllBtn = () => {
    setOutput('0');
    clear();
  };

  const addZero = (e) => {
    e.persist();
    if (output === '0') {
      return;
    } else {
      setOutput((prev) => prev + e.target.innerText);
    }
  };

  const addDecimal = (e) => {
    e.persist();
    if (!String(output).split('').includes(e.target.innerText)) {
      if (output === '') {
        setOutput('0' + e.target.innerText);
      } else {
        setOutput((prev) => prev + e.target.innerText);
      }
    }
  };

  const makePositiveOrNegative = () => {
    if (Math.sign(+output) === 1) {
      setOutput('-'.concat(output));
    } else {
      setOutput(output.substr(1));
    }
  };

  const getPercentage = () => {
    setOutput(+output / 100);
  };

  const add = () => {
    setPrevNumber(parseFloat(output));
    setOperator('plus');
    setOutput('');
    setActivePlus(true);
  };

  const subtract = () => {
    setPrevNumber(parseFloat(output));
    setOperator('minus');
    setOutput('');
    setActiveMinus(true);
  };

  const multiply = () => {
    setPrevNumber(parseFloat(output));
    setOperator('multiply');
    setOutput('');
    setActiveMultiply(true);
  };

  const divide = () => {
    setPrevNumber(parseFloat(output));
    setOperator('divide');
    setOutput('');
    setActiveDivide(true);
  };

  const calculate = () => {
    if (output !== '') {
      switch (operator) {
        case 'plus':
          setOutput(prevNumber + parseFloat(output));
          break;
        case 'minus':
          setOutput(prevNumber - parseFloat(output));
          break;
        case 'multiply':
          setOutput(prevNumber * parseFloat(output));
          break;
        case 'divide':
          setOutput(prevNumber / parseFloat(output));
          break;
        default:
          break;
      }
    } else {
      switch (operator) {
        case 'plus':
          setOutput(prevNumber + prevNumber);
          break;
        case 'minus':
          setOutput(prevNumber - prevNumber);
          break;
        case 'multiply':
          setOutput(prevNumber * prevNumber);
          break;
        case 'divide':
          setOutput(prevNumber / prevNumber);
          break;
        default:
          break;
      }
    }

    clear();
  };

  return (
    <div className={styles.container}>
      <Output result={output || prevNumber} />
      <KeyPad
        addToOutput={addToOutput}
        clear={clearAllBtn}
        addZero={addZero}
        addDecimal={addDecimal}
        makePositiveOrNegative={makePositiveOrNegative}
        getPercentage={getPercentage}
        add={add}
        subtract={subtract}
        multiply={multiply}
        divide={divide}
        calculate={calculate}
        activePlus={activePlus}
        activeMinus={activeMinus}
        activeMultiply={activeMultiply}
        activeDivide={activeDivide}
      />
    </div>
  );
};

export default App;
