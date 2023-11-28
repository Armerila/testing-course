import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('Chunk Function Tests', () => {

  it('should chunk an array into smaller arrays of a specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

  it('should handle final chunk that is smaller than specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
  });

  it('should return empty array when input array is null or undefined', () => {
    expect(chunk(null)).to.deep.equal([]);
    expect(chunk(undefined)).to.deep.equal([]);
  });

  it('should return empty array when size is less than 1', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 0)).to.deep.equal([]);
  });

  it('should handle non-integer size by rounding down', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2.9)).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

  it('should return the original array as a single chunk when size is equal or greater than array length', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 4)).to.deep.equal([['a', 'b', 'c', 'd']]);
    expect(chunk(array, 5)).to.deep.equal([['a', 'b', 'c', 'd']]);
  });

  it('should handle an empty array', () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it('should handle size as undefined', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array)).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
  });

});