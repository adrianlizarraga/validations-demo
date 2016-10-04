import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('basicusage');
  this.route('advancedusage');
  this.route('arrayusage');
});

export default Router;
