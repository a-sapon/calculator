import React, { useState } from 'react';
import Output from './Output/Output';
import styles from './App.module.css';
import KeyPad from './KeyPad/KeyPad';

const App = () => {
  const [output, setOutput] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operatorNumber, setOperatorNumber] = useState('');

  const addDigit = (e) => {
    e.persist();
    if (output === '0') {
      setOutput(e.target.innerText);
    } else {
      setOutput((prev) => prev + e.target.innerText);
    }
  };

  const clear = () => {
    setOutput('0');
  };

  const addZero = (e) => {
    e.persist();
    if (output === '0') {
      clear();
    } else {
      setOutput((prev) => prev + e.target.innerText);
    }
  };

  const addDecimal = (e) => {
    e.persist();
    if (output.split('').includes(e.target.innerText)) {
    } else {
      setOutput((prev) => prev + e.target.innerText);
    }
  };

  const makePositiveOrNegative = () => {
    if (Math.sign(+output) === 1) {
      setOutput('-'.concat(output));
    } else {
      setOutput(output.substr(1));
    }
  };

  const calculate = () => {
    
  };

  return (
    <div className={styles.container}>
      <Output result={output} />
      <KeyPad
        addDigit={addDigit}
        clear={clear}
        addZero={addZero}
        addDecimal={addDecimal}
        makePositiveOrNegative={makePositiveOrNegative}
        calculate={calculate}
      />
    </div>
  );
};

export default App;
