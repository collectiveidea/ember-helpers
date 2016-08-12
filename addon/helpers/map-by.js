import Ember from 'ember';

export default Ember.Helper.extend({

	compute([path, array]) {
		this.set('path', path);
		this.set('array', array);
		return this.get('content');
	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	pathDidChange: Ember.observer('path', function() {

		let path = Ember.get(this, 'path');

		if ( Ember.isEmpty(path) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		Ember.defineProperty(this, 'content', Ember.computed.mapBy('array', path));

	}),

});
