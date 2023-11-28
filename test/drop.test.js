import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop Function Tests', () => {

  it('should drop 1 element by default', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it('should drop specified number of elements', () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it('should return an empty array if more elements are dropped than available', () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it('should return the original array if 0 elements are dropped', () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it('should return an empty array for a null or undefined array', () => {
    expect(drop(null)).to.deep.equal([]);
    expect(drop(undefined)).to.deep.equal([]);
  });

  it('should not drop any elements if a negative number is specified', () => {
    expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
  });

  it('should handle non-integer numbers by dropping the integer part of the number', () => {
    expect(drop([1, 2, 3, 4], 1.5)).to.deep.equal([2, 3, 4]);
  });

});