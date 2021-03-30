import operate from '../logic/operate';

describe('Operate', () => {
  it('returns a string', () => {
    const result = operate('2', '5', '+');
    expect(typeof result).toBe('string');
  });

  it('returns a string', () => {
    const result = operate(2, 5, '+');
    expect(typeof result).toBe('string');
  });

  it('does not return a number', () => {
    const result = operate('1', '2', '-');
    expect(typeof result).not.toBe('number');
  });

  it('returns an undefined string', () => {
    const result = operate('1', '0', '/');
    expect(result).toBe('undefined');
  });

  it('returns 5', () => {
    const result = operate('50', '10', '/');
    expect(result).toBe('5');
  });
});
