import { module, test } from 'qunit';
import assetUrl from 'the-french-oven/utils/asset-url';
import config from 'the-french-oven/config/environment';

module('Unit | Utility | asset-url', function() {
  test('prepends rootURL to a leading-slash asset path', function(assert) {
    assert.equal(
      assetUrl('/assets/images/home/no-peanut.svg'),
      `${config.rootURL}assets/images/home/no-peanut.svg`
    );
  });
});
