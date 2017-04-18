import Multiplier from './Multiplier';
import 'mocha';
import { expect } from 'chai';

describe('Multiplier function', () => {
  var multiplier = new Multiplier();
  var result = multiplier.multiply(2, 3);

  it('should return 6', () => {
    expect(result).to.equal(6);
  });

  it('should compare 6 to a string', () => {
    expect(result).not.to.equal("string");
  });

  it('should compare 6 to a string', () => {
    expect(result).not.to.be.a('string');
  });

  it('should compare 6 to "6"', () => {
    expect(result).not.to.equal("6");
  });

  it('should expect 6 to be a number', () => {
    expect(result).to.be.a('number');
  });

}); 