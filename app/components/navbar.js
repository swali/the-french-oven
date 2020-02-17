import Component from '@glimmer/component';
import { action, set } from '@ember/object';

export default class Navbar extends Component {
  cakesItem;

  @action
  onCakesBlur(e) {
    this.cakesItem = this.cakesItem || document.getElementById('navbar__cakes-item');

    if (!this.cakesItem.contains(e.relatedTarget)) {
      set(this, 'showCakesDropdown', false);
    }
  }
}
