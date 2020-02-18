import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Slide extends Component {
  @tracked isLoading = true;

  @action
  onImageLoaded() {
    this.isLoading = false;
    this.args.onImageLoad();
  }
}
