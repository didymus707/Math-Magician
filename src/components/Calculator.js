import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';
import '../css/style.css';

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
      <div className="calc">
        <Display result={operations || total || next || '0'} />
        <ButtonPanel onBtnClick={handleClick} />
      </div>
    </>
  );
};

export default Calculator;
