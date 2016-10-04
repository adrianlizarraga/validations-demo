import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:basicusage', 'Unit | Controller | basicusage', {
    needs: [
        'validator:presence',
        'validator:length',
    ]
});

test('Title valid when not empty', function(assert) {
    const controller = this.subject();

    // Set empty title -> invalid
    controller.set('title', '');
    assert.ok(controller.get('validations.attrs.title.error'));
    assert.equal(controller.get('validations.attrs.title.message'), 'This field can\'t be blank');

    // Set a title -> valid
    controller.set('title', 'Hmm');
    assert.notOk(controller.get('validations.attrs.title.error'));
    assert.notOk(controller.get('validations.attrs.title.message'));
});
