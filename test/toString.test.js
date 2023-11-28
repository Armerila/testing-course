import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString Function Tests', () => {

  it('should convert a number to a string', () => {
    expect(toString(123)).to.equal('123');
  });

  it('should convert an array to a string', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  it('should convert null to an empty string', () => {
    expect(toString(null)).to.equal('');
  });

  it('should convert undefined to an empty string', () => {
    expect(toString(undefined)).to.equal('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should return the same string for string inputs', () => {
    expect(toString('hello')).to.equal('hello');
  });

  it('should handle boolean values correctly', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  it('should handle objects correctly', () => {
    expect(toString({ a: 1 })).to.equal('[object Object]');
  });

  it('should handle symbols correctly', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it('should handle nested arrays correctly', () => {
    expect(toString([1, [2, 3], 4])).to.equal('1,2,3,4');
  });

  it('should convert NaN to a string', () => {
    expect(toString(NaN)).to.equal('NaN');
  });

  it('should handle arrays with null and undefined correctly', () => {
    expect(toString([1, null, undefined, 2])).to.equal('1,,2');
  });

});