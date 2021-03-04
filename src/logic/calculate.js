/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
const calculate = (data, buttonName) => {
  debugger
  let { total, next, operation } = data;
  let first = '';
  let operations = ['/', '*', '-', '+', '%'];
  // total = 0;
  next = '';

  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  if (digits.includes(buttonName)) {
    next += buttonName;
    console.log(next);
  }
  if (buttonName === '.') {
    if (next === '') {
      next = `0${buttonName}`;
      console.log(next);
    }
    if (!next.includes('.')) {
      next + buttonName;
      console.log(next);
    }
  }
  // if (operations.includes(buttonName)) {
  // }
  next.includes('.') ? first = parseFloat(next) : first = parseInt(next);
  return first;
};

console.log(calculate({ total: 0, next: '', operation: [] }, '52'));
// export default calculate;
