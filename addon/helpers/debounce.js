import Ember from 'ember';

export function debounce([callback, wait], { immediate=false }) {
	return function(value) {
		return Ember.run.debounce(null, callback, value, wait, immediate);
	};
}

export default Ember.Helper.helper(debounce);