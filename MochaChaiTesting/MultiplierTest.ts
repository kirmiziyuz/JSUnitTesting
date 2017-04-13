import Multiplier from './Multiplier';
import 'qunit';

QUnit.test("MultiplierTest", (assert) => {
    var multiplier = new Multiplier();
    assert.deepEqual(multiplier.multiply(2, 3), 6, "top");
    assert.deepEqual(multiplier.multiply(2, 3), "zes", "niet top");
});