import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('cakes', function() {
    this.route('everyday-cakes');
    this.route('celebration-cakes');
    this.route('kids-birthday-cakes');
    this.route('eggless-cakes');
  });
  this.route('seasonals-cakes');
});

export default Router;
