import Route from '@ember/routing/route';
import cakes from 'the-french-oven/constants/cakes/celebration-cakes';

export default Route.extend({
  model() {
    return { cakes };
  },
});
