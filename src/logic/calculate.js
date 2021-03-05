/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
import operate from './operate';

const calculate = (data, btn) => {
  let { total, next, operation } = data;
  total = null;
  next = null;
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['/', 'X', '-', '+', '%'];
  if (btn === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (digits.includes(btn)) {
    next ? next += btn : next = btn;
  }
  if (btn === '.') {
    if (!next.includes('.')) {
      next += btn;
    }
    if (next === null) {
      next = `0${btn}`;
    }
  }
  if (operators.includes(btn)) {
    operation = btn;
    total = next;
    next = null;
  }
  if (btn === '+/-') {
    total.includes('.') ? total = (parseFloat(total) * -1).toString() : (parseInt(total) * -1).toString();
    next.includes('.') ? next = (parseFloat(next) * -1).toString() : (parseInt(next) * -1).toString();
  }
  if (btn === '=') {
    if (total && operation && next) { total = operate(total, next, operation); }
    next = null;
    operation = null;
  }
  return {total, next, operation };
};

export default calculate;
