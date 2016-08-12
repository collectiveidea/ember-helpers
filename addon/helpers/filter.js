import Ember from 'ember';

export default Ember.Helper.extend({

	compute([func, array]) {
		this.set('func', func);
		this.set('array', array);
		return this.get('content');
	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	funcDidChange: Ember.observer('func', function() {

		let func = Ember.get(this, 'func');

		if ( Ember.isEmpty(func) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		Ember.defineProperty(this, 'content', Ember.computed.filter('array', function() {
			return func(...arguments);
		}));

	}),

});
