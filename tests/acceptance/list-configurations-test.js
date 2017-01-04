import { test } from 'qunit';
import moduleForAcceptance from 'c5null-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list configurations');

test('visiting /app-config/list', function(assert) {
  visit('/app-config/list');

  andThen(() => {
    assert.equal(currentURL(), '/app-config/list');
  });
});

test('should list all configs', function (assert) {
  visit('/app-config/list');
   andThen(() => {
     assert.equal(find('.cf').length, 4, 'should see 4 configruations');
   });
});

test('click on show-link shows configuration', function (assert) {
  visit('/app-config/list');
  click('a[href="/app-config/4"]');
   andThen(() => {
     assert.equal(currentURL(), '/app-config/4');
   });
});