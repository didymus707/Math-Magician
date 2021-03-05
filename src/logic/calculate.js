/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
const calculate = (data, btn) => {
  let { total, next, operation } = data;
  total = '';
  next = '';
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operators = ['/', 'X', '-', '+', '%'];
  if (digits.includes(btn)) {
    next += btn;
  }
  if (btn === '.') {
    if (!next.includes('.')) {
      next += btn;
    }
    if (next === '') {
      next = `0${btn}`;
    }
  }
  if (operators.includes(btn)) {
    operation = btn;
    total += next;
    next = '';
  }
  if (btn === '+/-') {
    total.includes('.') ? total = (parseFloat(total) * -1).toString() : (parseInt(total) * -1).toString();
    next.includes('.') ? next = (parseFloat(next) * -1).toString() : (parseInt(next) * -1).toString();
  }
  if (btn === '=') {
    total = eval(total, operation, next);
  }
};

export default calculate;
