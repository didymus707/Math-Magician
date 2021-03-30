import calculate from '../logic/calculate';

describe('calculate', () => {
  let data = { total: null, next: null, operation: null };
  let result;

  it('returns a string', () => {
    result = calculate(data, '5');
    expect(typeof result.next).toBe('string');
  });

  it('return next value if operator is not pressed', () => {
    result = calculate(data, '5');
    expect(result.next).toBe('5');
  });

  it('returns next as 55 if operator is not pressed', () => {
    data = { total: null, next: '5', operation: null };
    result = calculate(data, '5');
    expect(result.next).toBe('55');
  });

  it('returns 55 as total when operator is pressed', () => {
    data = { total: null, next: '55', operation: null };
    result = calculate(data, '+');
    expect(result.total).toBe('55');
  });

  it('returns a cumulated value when = is pressed', () => {
    const operate = jest.fn();
    data = { total: operate('55', '5', '='), next: null, operator: null };
    expect(operate).toHaveBeenCalled();
  });

  it('returns 60 when = is pressed', () => {
    data = { total: '55', next: '5', operation: '+' };
    result = calculate(data, '=');
    expect(result.total).toBe('60');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  it('returns 0. when next is null and period is pressed', () => {
    data = { total: null, next: null, operation: null };
    result = calculate(data, '.');
    expect(result.next).toBe('0.');
  });

  it('returns 0.1 when next is null and period is pressed', () => {
    data = { total: null, next: '0.', operation: null };
    result = calculate(data, '1');
    expect(result.next).toBe('0.1');
  });

  it('returns 11 when an operator is pressed', () => {
    data = { total: '5', next: '6', operation: '+' };
    result = calculate(data, '-');
    expect(result.total).toBe('11');
  });

  it('returns next as null when an operator is pressed', () => {
    data = { total: '5', next: '6', operation: '+' };
    result = calculate(data, '-');
    expect(result.next).toBe(null);
  });

  it('returns next and operation as null when an operator is pressed', () => {
    data = { total: '5', next: '6', operation: '+' };
    result = calculate(data, '-');
    expect(result.operation).toBe('-');
  });
});
