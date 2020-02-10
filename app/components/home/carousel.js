import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
import { action } from '@ember/object';

const NUMBER_OF_SLIDES = 3;
const MILLISECONDS_PER_SLIDE = 5000;

export default class Carousel extends Component {
  @tracked activeSlide = 0;
  autoSwitchSlides = true;

  constructor() {
    super(...arguments);
    this.switchSlideDelayed();
  }

  switchSlideDelayed() {
    if (this.autoSwitchSlides) {
      later(() => {
        this.switchSlide(this.activeSlide + 1);
        this.switchSlideDelayed();
      }, MILLISECONDS_PER_SLIDE);
    }
  }

  switchSlide(number) {
    this.activeSlide = number % NUMBER_OF_SLIDES;
  }

  // TODO: figure out why this @action is required here
  @action
  onDotClick(number) {
    this.switchSlide(number);
    this.autoSwitchSlides = false;
  }
}
