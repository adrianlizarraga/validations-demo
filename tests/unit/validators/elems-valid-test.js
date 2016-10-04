import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:elems-valid', 'Unit | Validator | elems-valid', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
