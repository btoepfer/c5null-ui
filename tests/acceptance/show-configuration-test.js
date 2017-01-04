import { test } from 'qunit';
import moduleForAcceptance from 'c5null-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | show configuration');

test('visiting /app-config/1', function(assert) {
  visit('/app-config/1');

  andThen(function() {
    assert.equal(currentURL(), '/app-config/1');
  });
});

test('should show first config', function (assert) {
  visit('/app-config/1');
   andThen(() => {
     assert.equal(find('h2>span').text(), 'My first config');
   });
});

test('should show first active config', function (assert) {
  visit('/app-config/4');
   andThen(() => {
     assert.equal(find('h2>span').text(), 'My first config');
   });
});