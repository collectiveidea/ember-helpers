import Ember from 'ember';

export default Ember.Helper.extend({

	compute([path, value, array]) {

		if ( !Ember.isArray(array) && Ember.isArray(value) ) {
			array = value;
			value = undefined;
		}

		this.set('path', path);
		this.set('value', value);
		this.set('array', array);

		return this.get('content');

	},

	changed: Ember.observer('content', function() {
		this.recompute();
	}),

	pathDidChange: Ember.observer('path', 'value', function() {

		let func = () => null;
		let path = Ember.get(this, 'path');
		let value = Ember.get(this, 'value');

		if ( Ember.isEmpty(path) ) {
			Ember.defineProperty(this, 'content', []);
			return;
		}

		if ( Ember.isPresent(value) ) {
			if (typeof value === 'function') {
				func = (item) => !value( Ember.get(item, path) );
			} else {
				func = (item) => Ember.get(item, path) !== value;
			}
		} else {
			func = (item) => Ember.isEmpty( Ember.get(item, path) );
		}

		Ember.defineProperty(this, 'content', Ember.computed.filter(`array.@each.${path}`, func));

	}),

});
