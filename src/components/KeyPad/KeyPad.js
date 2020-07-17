import React from 'react';
import styles from './KeyPad.module.css';

const KeyPad = ({
  addToOutput,
  clear,
  addZero,
  addDecimal,
  makePositiveOrNegative,
  getPercentage,
  add,
  subtract,
  multiply,
  divide,
  calculate,
  activePlus,
  activeMinus,
  activeMultiply,
  activeDivide
}) => (
  <div className={styles.keypad}>
    <div className={styles.digits}>
      <button onClick={clear} className={styles.digitsBtn} type='button'>AC</button>
      <button onClick={makePositiveOrNegative} className={styles.digitsBtn} type='button'>+/-</button>
      <button onClick={getPercentage} className={styles.digitsBtn} type='button'>%</button>

      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>7</button>
      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>8</button>
      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>9</button>

      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>4</button>
      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>5</button>
      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>6</button>

      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>1</button>
      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>2</button>
      <button onClick={addToOutput} className={styles.digitsBtn} type='button'>3</button>

      <button onClick={addZero} type='button' className={styles.zero}>0</button>
      <button onClick={addDecimal} className={styles.digitsBtn} type='button'>.</button>
    </div>

    <div className={styles.operations}>
      <button onClick={divide} className={activeDivide ? `${styles.operationsBtn} ${styles.active}` : `${styles.operationsBtn}`} type='button'>&#247;</button>
      <button onClick={multiply} className={activeMultiply ? `${styles.operationsBtn} ${styles.active}` : `${styles.operationsBtn}`} type='button'>x</button>
      <button onClick={subtract} className={activeMinus ? `${styles.operationsBtn} ${styles.active}` : `${styles.operationsBtn}`} type='button'>-</button>
      <button onClick={add} className={activePlus ? `${styles.operationsBtn} ${styles.active}` : `${styles.operationsBtn}`} type='button'>+</button>
      <button onClick={calculate} className={styles.operationsBtn} type='button'>=</button>
    </div>
  </div>
);

export default KeyPad;
