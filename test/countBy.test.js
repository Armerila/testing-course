import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy Function Tests', () => {

  it('should count occurrences based on iteratee results', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(countBy(users, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
  });

  it('should handle an array of numbers correctly', () => {
    expect(countBy([4.3, 6.1, 6.4], Math.floor)).to.deep.equal({ '4': 1, '6': 2 });
  });

  it('should work with iteratee shorthand', () => {
    const users = [
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'pebbles', 'age': 1 }
    ];
    expect(countBy(users, 'age')).to.deep.equal({ '36': 1, '40': 1, '1': 1 });
  });

  it('should handle an empty collection', () => {
    expect(countBy([], value => value)).to.deep.equal({});
  });

  it('should return an empty object for null or undefined input', () => {
    expect(countBy(null, value => value)).to.deep.equal({});
    expect(countBy(undefined, value => value)).to.deep.equal({});
  });

  it('should count strings in an array', () => {
    const strings = ['one', 'two', 'one', 'three', 'one'];
    expect(countBy(strings, identity => identity)).to.deep.equal({ 'one': 3, 'two': 1, 'three': 1 });
  });

  it('should not modify the original collection', () => {
    const collection = ['a', 'b', 'a'];
    countBy(collection, identity => identity);
    expect(collection).to.deep.equal(['a', 'b', 'a']);
  });

});