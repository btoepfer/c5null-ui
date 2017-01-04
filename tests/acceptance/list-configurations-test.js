import { test } from 'qunit';
import moduleForAcceptance from 'c5null-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list configurations');

test('visiting /list-configurations', function(assert) {
  visit('/list-configurations');

  andThen(() => {
    assert.equal(currentURL(), '/list-configurations');
  });
});

test('should list all configs', function (assert) {
  visit('/list-configurations');
   andThen(() => {
     assert.equal(find('.cf').length, 4, 'should see 4 configruations');
   });
});
