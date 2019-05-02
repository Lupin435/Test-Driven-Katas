// specs below

const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns the string if its length does not exceed the max length', () => {
    expect(wrap('hello world', 11)).to.equal('hello world');
  });
  it('Contains a line break if the string length exceeds the max length', () => {
    expect(wrap('hello world', 5)).to.include('\n');
  });
  it('Splits a string across multiple lines', () => {
    const lines = wrap('hello world', 6).split('\n');
    const trimmedLines = lines.map(line => line.trim());
    expect(trimmedLines).to.have.lengthOf(2);
    expect(trimmedLines[0]).to.equal('hello');
    expect(trimmedLines[1]).to.equal('world');
  });

  //string is not altered except for newlines
  //newlines respect word boundaries
});
