import Ember from 'ember';

export default Ember.Helper.extend({

	changed: Ember.observer('object.isUpdating', function() {
		this.recompute();
	}),

	compute([object]) {
		this.set('object', object);
		return this.get('object.isUpdating');
	},

});
