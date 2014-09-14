import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoENV.locationType
});

Router.map(function() {
  this.route('todos');
  this.route('todos/active');
  this.route('todos/completed');
});

export default Router;
