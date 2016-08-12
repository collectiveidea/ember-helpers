import Ember from 'ember';

export default Ember.Helper.extend({

	changed: Ember.observer('array.[]', function() {
		this.recompute();
	}),

	compute([separator, ...array]) {
		this.set('array', array);
		return Ember.A(array).reduce( (words, other) => words.concat(other) ).join(separator);
	},

});
