import Ember from 'ember'
import Resolver from 'ember/resolver'
import loadInitializers from 'ember/load-initializers'
import EditTodo from './components/edit-todo'

Ember.MODEL_FACTORY_INJECTIONS = true
Ember.Handlebars.helper('edit-todo', EditTodo)

var App = Ember.Application.extend({
  modulePrefix: 'todo', // TODO: loaded via config
  Resolver: Resolver
})

loadInitializers(App, 'todo')

export default App
