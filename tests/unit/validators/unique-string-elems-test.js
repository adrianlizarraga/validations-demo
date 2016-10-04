import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:unique-string-elems', 'Unit | Validator | unique-string-elems', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
