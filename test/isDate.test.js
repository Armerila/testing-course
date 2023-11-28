import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate Function Tests', () => {

  it('should return true for a Date object', () => {
    expect(isDate(new Date())).to.be.true;
  });

  it('should return false for a string representing a date', () => {
    expect(isDate('Mon April 23 2012')).to.be.false;
  });

  it('should return false for null', () => {
    expect(isDate(null)).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isDate(undefined)).to.be.false;
  });

  it('should return false for a number', () => {
    expect(isDate(12345)).to.be.false;
  });

  it('should return false for an array', () => {
    expect(isDate([2020, 1, 1])).to.be.false;
  });

  it('should return false for an object', () => {
    expect(isDate({ year: 2020, month: 1, day: 1 })).to.be.false;
  });

  it('should return false for a boolean', () => {
    expect(isDate(true)).to.be.false;
    expect(isDate(false)).to.be.false;
  });

  it('should return false for a function', () => {
    expect(isDate(() => {})).to.be.false;
  });

});
