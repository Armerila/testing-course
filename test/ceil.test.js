import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil Function Tests', () => {

  it('should round up a decimal number to the nearest integer', () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it('should round up a decimal number to the specified precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('should round up a large number to a negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it('should handle zero precision correctly', () => {
    expect(ceil(4.5, 0)).to.equal(5);
  });

  it('should return the same number if no rounding is needed', () => {
    expect(ceil(5, 0)).to.equal(5);
  });

  it('should handle negative numbers correctly', () => {
    expect(ceil(-4.6)).to.equal(-4);
  });

  it('should handle rounding up to a higher negative precision', () => {
    expect(ceil(-4567, -2)).to.equal(-4500);
  });

  it('should return NaN for non-numeric inputs', () => {
    expect(ceil('abc')).to.be.NaN;
  });

  it('should handle undefined and null inputs gracefully', () => {
    expect(ceil(undefined)).to.be.NaN;
    expect(ceil(null)).to.equal(0);
  });

  it('should handle edge cases with extremely large numbers', () => {
    expect(ceil(1.7976931348623157e+308, -308)).to.equal(2e+308);
  });

});