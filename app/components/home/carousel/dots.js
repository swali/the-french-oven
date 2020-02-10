import Component from '@glimmer/component';

export default class Dots extends Component {
  get slides() {
    // TODO: figure out how to get this from the parent
    return new Array(3);
  }
}
