import { expect } from 'chai';
import slice from '../src/slice.js';

describe('Slice Function Tests', () => {

  it('should slice a portion of an array', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).to.deep.equal([3, 4]);
  });

  it('should slice a portion of an array with a specified end', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
  });

  it('should handle negative start index', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, -2)).to.deep.equal([3, 4]);
  });

  it('should handle negative end index', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 1, -1)).to.deep.equal([2, 3]);
  });

  it('should return empty array for invalid start index', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 5)).to.deep.equal([]);
  });

  it('should return empty array for null or undefined array', () => {
    expect(slice(null)).to.deep.equal([]);
    expect(slice(undefined)).to.deep.equal([]);
  });

  it('should return the full array if start and end are not specified', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should return an empty array if start is greater than end', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 3, 2)).to.deep.equal([]);
  });

});