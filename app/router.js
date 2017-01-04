import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('terms');
  this.route('blank');
  this.route('alive-test');

  this.route('app-config', function() {
    this.route('list');
  });
});

export default Router;
