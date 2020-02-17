import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
import { action, set } from '@ember/object';
import CarouselCakes from 'the-french-oven/constants/home/carousel-cakes';

const MILLISECONDS_PER_SLIDE = 5000;

export default class Carousel extends Component {
  @tracked activeSlide = 0;
  autoSwitchSlides = true;
  firstImageLoaded = false;
  cakes = null;

  constructor() {
    super(...arguments);
    this.initCakes();
  }

  /**
   * Only set the src for the first image. The remaining images will be lazy loaded.
   */
  initCakes() {
    this.cakes = CarouselCakes.map((cake) => ({
      name: cake.name,
      imageUrl: '',
    }));

    this.cakes[0].imageUrl = CarouselCakes[0].imageUrl;
  }

  /**
   * After the first image is loaded, set the src for the other image and start the timer
   * for slider.
   */
  loadRemainingImages() {
    this.cakes.forEach((cake, index) => {
      set(cake, 'imageUrl', CarouselCakes[index].imageUrl);
    });

    this.switchSlideDelayed();
  }

  switchSlideDelayed() {
    later(() => {
      if (this.autoSwitchSlides) {
        this.switchSlide(this.activeSlide + 1);
        this.switchSlideDelayed();
      }
    }, MILLISECONDS_PER_SLIDE);
  }

  switchSlide(number) {
    this.activeSlide = number % CarouselCakes.length;
  }

  @action
  onDotClick(number) {
    this.switchSlide(number);
    this.autoSwitchSlides = false;
  }

  @action
  onSlideImageLoad() {
    if (!this.firstImageLoaded) {
      this.loadRemainingImages();
      this.firstImageLoaded = true;
    }
  }
}
