import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:my-validator', 'Unit | Validator | my-validator', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
