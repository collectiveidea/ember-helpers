import Ember from 'ember';

export default Ember.Helper.extend({

	changed: Ember.observer('array.[]', function() {
		this.recompute();
	}),

	compute([array]) {

		if ( !Ember.isArray(array) ) {
			return undefined;
		}

		this.set('array', array);

		return Ember.A(array).objectAt( Ember.A(array).get('length') - 1 );

	},

});
