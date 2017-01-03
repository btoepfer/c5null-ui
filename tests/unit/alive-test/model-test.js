import { moduleForModel, test } from 'ember-qunit';

moduleForModel('alive-test', 'Unit | Model | alive-test', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
