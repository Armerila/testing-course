import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter Function Tests', () => {

  it('should filter an array based on a predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    expect(filter(users, ({ active }) => active)).to.deep.equal([users[0]]);
  });

  it('should return an empty array if no elements pass the predicate', () => {
    const numbers = [1, 2, 3, 4];
    expect(filter(numbers, num => num > 5)).to.deep.equal([]);
  });

  it('should handle an array of mixed types', () => {
    const mixedArray = [1, 'a', {}, false, true];
    expect(filter(mixedArray, item => typeof item === 'number')).to.deep.equal([1]);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3];
    filter(array, n => n > 1);
    expect(array).to.deep.equal([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(filter([], val => val)).to.deep.equal([]);
  });

  it('should work with complex predicates', () => {
    const complexArray = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    expect(filter(complexArray, obj => obj.id === 2)).to.deep.equal([complexArray[1]]);
  });

  it('should return empty array for null or undefined input', () => {
    expect(filter(null, val => val)).to.deep.equal([]);
    expect(filter(undefined, val => val)).to.deep.equal([]);
  });

  it('should pass index and array arguments to the predicate', () => {
    const spyPredicate = (value, index, array) => {
      expect(array).to.include.members([1, 2, 3]);
      return value === 2;
    };
    const array = [1, 2, 3];
    expect(filter(array, spyPredicate)).to.deep.equal([2]);
  });

  it('should handle a predicate that always returns true', () => {
    const array = [1, 2, 3];
    expect(filter(array, () => true)).to.deep.equal(array);
  });

});