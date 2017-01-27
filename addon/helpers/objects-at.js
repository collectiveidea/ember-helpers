import Ember from 'ember';

export default Ember.Helper.extend({

	changed: Ember.observer('array.[]', function() {
		this.recompute();
	}),

	compute([...params]) {

		let items = params.slice(0, -1);
		let array = params.slice().pop();

		if ( !Ember.isArray(array) ) {
			return undefined;
		}

		this.set('array', array);

		return Ember.A(array).objectsAt(items);

	},

});
