import Multiplier from '../Multiplier';
import 'jasmine';

describe('Multiplier', () => {
    var multiplier = new Multiplier();

    it('should multiply 2 by 3 and return 6', () => {
        expect(multiplier.multiply(2, 3)).toEqual(6);
    });
});