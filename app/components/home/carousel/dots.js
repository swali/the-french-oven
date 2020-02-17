import Component from '@glimmer/component';

export default class Dots extends Component {
  get slides() {
    return new Array(this.args.count);
  }
}
