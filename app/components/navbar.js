import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class Navbar extends Component {
  @service router;

  @computed('router.currentRouteName')
  get isCakesRoute() {
    return this.router.currentRouteName.startsWith('cakes');
  }
}
