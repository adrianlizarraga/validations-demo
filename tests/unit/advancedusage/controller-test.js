import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:advancedusage', 'Unit | Controller | advancedusage', {
    needs: [
        'validator:presence',
        'validator:length',
        'validator:date',
        'validator:valid-name',
        'validator:number',
    ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
    const controller = this.subject();

    assert.ok(controller);
});
