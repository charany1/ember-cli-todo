import DS from 'ember-data'
// import LSAdapter from 'localstorage_adapter'


export default DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
})
