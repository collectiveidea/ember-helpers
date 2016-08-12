import Ember from 'ember';

export function toggle([prop, obj, ...values]) {
	return function() {

		if ( Ember.isPresent(values) ) {
			let idx = values.indexOf( Ember.get(obj, prop) );
			let nxt = values[idx+1] || values[0];
			return Ember.set(obj, prop, nxt);
		}

		return Ember.set(obj, prop, !Ember.get(obj, prop));

	};
}

export default Ember.Helper.helper(toggle);
