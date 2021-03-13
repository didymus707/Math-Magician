/* eslint-disable no-console */
import operate from './operate';

const calculate = (data, btn) => {
  let { total, next, operation } = data;
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['/', 'X', '-', '+', '%'];

  if (btn === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (digits.includes(btn)) {
    if (next) next += btn;
    else next = btn;
  }

  if (btn === '.') {
    console.log(next);
    if (next !== null && !next.includes('.')) next += btn;
    else next = `0${btn}`;
  }

  if (operators.includes(btn)) {
    if (total && operation && next) {
      total = operate(total, next, operation);
      operation = btn;
      next = null;
    } else if (total) {
      if (btn === '%') total = operate(total, '100', '%');
      else operation = btn;
    } else if (btn === '%' && next) {
      next = operate(next, '100', '%');
    } else {
      total = next;
      operation = btn;
      next = null;
    }
  }

  if (btn === '+/-') {
    total = (total * -1).toString();
    next = (next * -1).toString();
  }

  if (btn === '=') {
    if (total && operation && next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  return { total, next, operation };
};

export default calculate;
