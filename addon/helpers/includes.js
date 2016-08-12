import Ember from 'ember';

export default Ember.Helper.extend({

	compute([needle, haystack]) {
		this.set('needle', needle);
		this.set('haystack', haystack);
		return this.get('content');
	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	content: Ember.computed('needle.[]', 'haystack.[]', function() {

		let needle = Ember.get(this, 'needle');
		let haystack = Ember.get(this, 'haystack');

		if ( !Ember.isArray(haystack) ) {
			return false;
		}

		if ( Ember.isArray(needle) && Ember.get(needle, 'length') ) {
			return needle.every( item => Ember.A(haystack).contains(item) );
		} else {
			return Ember.A(haystack).contains(needle);
		}

	}).readOnly(),

});
