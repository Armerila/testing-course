import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('Reduce Function Tests', () => {

  it('should reduce an array with an initial accumulator value', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).to.equal(6);
  });

  it('should reduce an array without an initial accumulator value', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).to.equal(6);
  });

  it('should reduce an object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(object, (res, value, key) => {
      (res[value] || (res[value] = [])).push(key);
      return res;
    }, {});
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should handle an empty collection', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).to.equal(0);
  });

  it('should handle a collection with a single element', () => {
    expect(reduce([5], (sum, n) => sum + n)).to.equal(5);
  });

  it('should return the initial accumulator when the collection is empty', () => {
    expect(reduce([], (sum, n) => sum + n, 10)).to.equal(10);
  });

  it('should correctly use the first element as the initial accumulator if none is provided', () => {
    expect(reduce([2, 3, 4], (sum, n) => sum + n)).to.equal(9);
  });

});