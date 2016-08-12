import Ember from 'ember';

export default Ember.Helper.extend({

	compute([path, value, array]) {

		if ( !Ember.isArray(array) && Ember.isArray(value) ) {
			array = value;
			value = true;
		}

		this.set('path', path);
		this.set('value', value);
		this.set('array', array);

		return this.get('content');

	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	content: Ember.computed('path', 'array.[]', function() {

		let path = Ember.get(this, 'path');
		let value = Ember.get(this, 'value');
		let array = Ember.get(this, 'array');

		if ( Ember.isEmpty(path) ) {
			return false;
		}

		if ( !Ember.isArray(array) ) {
			return false;
		}

		return Ember.A(array).isEvery(path, value);

	}).readOnly(),

});
