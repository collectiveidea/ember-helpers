import Ember from 'ember';

export default Ember.Helper.extend({

	browser: Ember.inject.service(),

	compute() {
		return this.get('browser.name');
	},

});
