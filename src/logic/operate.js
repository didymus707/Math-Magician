import Big from 'big.js';

const operate = (one, two, operation) => {
  const numOne = new Big(one);
  const numTwo = new Big(two);
  let result;
  if (operation === '-') result = numOne.minus(numTwo);
  if (operation === '+') result = numOne.plus(numTwo);
  if (operation === 'X') result = numOne.times(numTwo);
  if (operation === '%') result = numOne.div(numTwo);
  if (operation === '/') {
    if (two === '0') result = 'undefined';
    else result = numOne.div(numTwo);
  }
  return result.toString();
};

export default operate;
