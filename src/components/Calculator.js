import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';
import '../css/style.css';
import Nav from './Nav';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = btn => {
    const data = { total, next, operation };
    const results = calculate(data, btn);
    setTotal(results.total);
    setNext(results.next);
    setOperation(results.operation);
  };

  const operations = operation ? next : total;

  return (
    <>
      <Nav />
      <div className="calc-con">
        <div className="math">
          <p>Let&apos;s do some Math!</p>
        </div>
        <div className="cal">
          <Display result={operations || total || next || '0'} />
          <ButtonPanel onBtnClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
