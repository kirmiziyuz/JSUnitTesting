import Multiplier from '../Multiplier';
import 'jasmine';

describe('Multiplier', () => {
    var multiplier = new Multiplier();

    it('should multiply', () => {
        expect(multiplier.multiply(2, 3)).toEqual(6);
    });

    it('should fail', () => {
        expect(1).toEqual(2);
    });
});