import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

const numberOfSlides = 3;

export default class Carousel extends Component {
  @tracked activeSlide = 0;

  constructor() {
    super(...arguments);
    later(this.switchSlide.bind(this), 4000);
  }

  switchSlide() {
    this.activeSlide = (this.activeSlide + 1) % numberOfSlides;
    later(this.switchSlide.bind(this), 4000);
  }
}
