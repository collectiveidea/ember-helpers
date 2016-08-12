import Ember from 'ember';

export default Ember.Helper.extend({

	changed: Ember.observer('array.[]', function() {
		this.recompute();
	}),

	compute([array]) {
		this.set('array', array);
		return this.get('array.length');
	},

});
