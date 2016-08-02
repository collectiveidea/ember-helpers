import Ember from 'ember';

export function throttle([callback, wait], { immediate=false }) {
	return function(value) {
		return Ember.run.throttle(null, callback, value, wait, immediate);
	};
}

export default Ember.Helper.helper(throttle);
