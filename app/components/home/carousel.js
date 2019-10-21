import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

const NUMBER_OF_SLIDES = 3;
const MILLISECONDS_PER_SLIDE = 5000;

export default class Carousel extends Component {
  @tracked activeSlide = 0;

  constructor() {
    super(...arguments);
    this.switchSlideDelayed();
  }

  switchSlideDelayed() {
    later(() => {
      this.activeSlide = (this.activeSlide + 1) % NUMBER_OF_SLIDES;
      this.switchSlideDelayed();
    }, MILLISECONDS_PER_SLIDE);
  }
}
