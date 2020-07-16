import React from 'react';
import styles from './KeyPad.module.css';

const KeyPad = ({ addDigit, clear, addZero, addDecimal, makePositiveOrNegative, calculate }) => (
  <div className={styles.keypad}>
    <div className={styles.digits}>
      <button onClick={clear} type='button'>AC</button>
      <button onClick={makePositiveOrNegative} type='button'>+/-</button>
      <button type='button'>%</button>

      <button onClick={addDigit} type='button'>7</button>
      <button onClick={addDigit} type='button'>8</button>
      <button onClick={addDigit} type='button'>9</button>

      <button onClick={addDigit} type='button'>4</button>
      <button onClick={addDigit} type='button'>5</button>
      <button onClick={addDigit} type='button'>6</button>

      <button onClick={addDigit} type='button'>1</button>
      <button onClick={addDigit} type='button'>2</button>
      <button onClick={addDigit} type='button'>3</button>

      <button onClick={addZero} type='button' className={styles.zero}>0</button>
      <button onClick={addDecimal} type='button'>.</button>
    </div>

    <div className={styles.operations}>
      <button type='button'>&#247;</button>
      <button type='button'>x</button>
      <button type='button'>-</button>
      <button type='button'>+</button>
      <button onClick={calculate} type='button'>=</button>
    </div>
  </div>
);

export default KeyPad;
