import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:valid-name', 'Unit | Validator | valid-name', {
    needs: ['validator:messages']
});

test('it works', function(assert) {
    const validator = this.subject();

    // Valid for name w/ 2 parts
    let returnVal = validator.validate('first last', { numParts: 2 });
    assert.equal(returnVal, true);

    // Invalid for name with less parts
    returnVal = validator.validate('firstonly', { numParts: 2 });
    assert.equal(returnVal, 'The name must have 2 word(s)');
});
