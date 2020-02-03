import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  router: service(),

  isCakesRoute: computed('router.currentRouteName', function() {
    return this.get('router.currentRouteName').startsWith('cakes');
  }).readOnly(),
});
