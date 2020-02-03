import Route from '@ember/routing/route';
import cakes from 'the-french-oven/constants/cakes/kids-birthday-cakes';

export default Route.extend({
  model() {
    return { cakes };
  },
});
