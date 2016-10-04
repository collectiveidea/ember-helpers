import Ember from 'ember';

export function invoke([method, object, ...args]) {

	if ( Ember.isArray(object) ) {
		return function() {
			return Ember.RSVP.all(
				object.map(i => Ember.tryInvoke(i, method, args))
			);
		};
	}

	return function() {
		return Ember.tryInvoke(object, method, args);
	};

}

export default Ember.Helper.helper(invoke);
