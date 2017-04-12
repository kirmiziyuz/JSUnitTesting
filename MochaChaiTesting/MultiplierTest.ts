import Multiplier from './Multiplier';
import 'mocha';
import { expect } from 'chai';

describe('Multiplier function', () => {
  it('should return 6', () => {
    var multiplier = new Multiplier();
    var result = multiplier.multiply(2, 3);

    expect(result).to.equal(6);
  });
}); 