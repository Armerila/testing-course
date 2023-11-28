import { expect } from 'chai';
import map from '../src/map.js';

describe('map Function Tests', () => {

  it('should map an array of numbers using a provided function', () => {
    function square(n) {
      return n * n;
    }
    expect(map([4, 8], square)).to.deep.equal([16, 64]);
  });

  it('should handle an array of objects and access their properties', () => {
    const users = [{ 'user': 'barney' }, { 'user': 'fred' }];
    expect(map(users, obj => obj.user)).to.deep.equal(['barney', 'fred']);
  });

  it('should pass index and array arguments to the iteratee', () => {
    const spyIteratee = (value, index, array) => {
      expect(array).to.include.members([1, 2, 3]);
      return value * index;
    };
    expect(map([1, 2, 3], spyIteratee)).to.deep.equal([0, 2, 6]);
  });

  it('should handle an empty array', () => {
    expect(map([], val => val * 2)).to.deep.equal([]);
  });

  it('should return empty array for null or undefined input', () => {
    expect(map(null, val => val)).to.deep.equal([]);
    expect(map(undefined, val => val)).to.deep.equal([]);
  });

  it('should handle an array of mixed types', () => {
    const mixedArray = [1, 'a', {}, true];
    expect(map(mixedArray, item => typeof item)).to.deep.equal(['number', 'string', 'object', 'boolean']);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3];
    map(array, n => n * 2);
    expect(array).to.deep.equal([1, 2, 3]);
  });

});